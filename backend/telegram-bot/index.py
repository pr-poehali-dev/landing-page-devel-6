"""
Telegram-бот для обратной связи с посетителями сайта.
Отвечает на вопросы о программе АПГРЕЙД, используя OpenAI.
"""

import json
import os
from typing import Dict, Any
import requests

SITE_KNOWLEDGE = """
# Программа АПГРЕЙД от Дарьи Цыбульской

## О программе
АПГРЕЙД — это 14-дневная программа трансформации состояния для женщин, которые столкнулись с:
- Энергетической и психологической усталостью
- Апатией, раздражением
- Жизнью в "дне сурка"
- Потерей радости и вдохновения
- Физической тяжестью
- Отсутствием ощущения собственной ценности
- Чувством внутренней опасности и неуверенности

## Форматы программы (пакеты)

### СОЛЬНАЯ ЭКСПЕДИЦИЯ
- Цена: 3000 ₽
- 14 дней самостоятельной работы
- Готовые материалы и практики
- Чек-листы прогресса
- Техподдержка 24/7

### ГРУППОВОЙ ПОЛЁТ  
- Цена: 10 000 ₽
- 14 дней с поддержкой в группе
- Все материалы СОЛЬНОЙ
- Закрытый чат единомышленниц
- Еженедельные Zoom-встречи
- Персональная обратная связь от Дарьи

### VIP-ЗАПУСК
- Цена: 30 000 ₽
- Индивидуальное сопровождение
- Все материалы ГРУППОВОЙ
- 3 личные сессии с Дарьей (90 мин)
- Персональный план трансформации
- Прямая связь в Telegram
- Доступ к закрытым мастер-классам

## Аватары участниц
1. ЗАСТРЯВШАЯ — устала от одинаковых дней
2. ВЫГОРЕВШАЯ — нет сил на себя
3. ИЩУЩАЯ ОПОРУ — потеряла уверенность
4. ЗАМЁРЗШАЯ — забыла про радость
5. ПОТЕРЯВШАЯ ВКУС — жизнь стала пресной

## Контакты
- WhatsApp: +7 914 966 66 17
- Telegram: @dashapoddubnaya
- Instagram: @darya_tsybulskaya22
- Местоположение: Владивосток, Дальний Восток
"""


def get_ai_response(user_message: str) -> str:
    """Получить ответ от OpenAI на основе контекста сайта"""
    openai_key = os.environ.get('OPENAI_API_KEY')
    
    if not openai_key:
        return "Извините, сервис временно недоступен. Напишите напрямую: @dashapoddubnaya"
    
    try:
        response = requests.post(
            'https://api.openai.com/v1/chat/completions',
            headers={
                'Authorization': f'Bearer {openai_key}',
                'Content-Type': 'application/json'
            },
            json={
                'model': 'gpt-4o-mini',
                'messages': [
                    {
                        'role': 'system',
                        'content': f"""Ты — помощник Дарьи Цыбульской, ведущей программу АПГРЕЙД.
Твоя задача — помогать посетителям сайта, отвечая на вопросы о программе.

Контекст программы:
{SITE_KNOWLEDGE}

Правила общения:
1. Отвечай тепло, по-дружески, от первого лица (как будто это сама Дарья)
2. Используй эмодзи умеренно
3. Если информации нет в контексте — честно скажи об этом
4. Всегда предлагай связаться напрямую: @dashapoddubnaya или WhatsApp +7 914 966 66 17
5. Подчёркивай ценность программы и результаты за 14 дней
6. Будь поддерживающей и мотивирующей"""
                    },
                    {
                        'role': 'user',
                        'content': user_message
                    }
                ],
                'max_tokens': 500,
                'temperature': 0.7
            },
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            return data['choices'][0]['message']['content']
        else:
            return "Извините, не смогла обработать запрос. Напишите мне напрямую: @dashapoddubnaya 💜"
            
    except Exception as e:
        print(f"[ERROR] OpenAI API error: {str(e)}")
        return "Что-то пошло не так. Свяжитесь со мной в Telegram: @dashapoddubnaya"


def handler(event: Dict[str, Any], context) -> Dict[str, Any]:
    """Webhook для Telegram бота"""
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        print(f"[DEBUG] Received update: {json.dumps(body)}")
        
        if 'message' not in body:
            print("[DEBUG] No message in update, skipping")
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'ok': True}),
                'isBase64Encoded': False
            }
        
        message = body['message']
        chat_id = message['chat']['id']
        user_text = message.get('text', '')
        print(f"[DEBUG] User {chat_id} sent: {user_text}")
        
        if user_text.startswith('/start'):
            response_text = """Привет! 👋 

Я помощник Дарьи Цыбульской. Отвечу на вопросы о программе АПГРЕЙД — 14-дневной трансформации для женщин.

Спрашивай что угодно:
• О форматах программы
• О стоимости
• Какой пакет подойдёт именно тебе
• Как проходит программа

Или сразу пиши Дарье: @dashapoddubnaya 💜"""
        else:
            response_text = get_ai_response(user_text)
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        if not bot_token:
            print("[ERROR] Bot token not found in environment")
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Bot token not configured'}),
                'isBase64Encoded': False
            }
        
        print(f"[DEBUG] Sending response to {chat_id}: {response_text[:100]}...")
        send_response = requests.post(
            f'https://api.telegram.org/bot{bot_token}/sendMessage',
            json={
                'chat_id': chat_id,
                'text': response_text,
                'parse_mode': 'Markdown'
            },
            timeout=5
        )
        print(f"[DEBUG] Telegram API response: {send_response.status_code} - {send_response.text}")
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'ok': True}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        print(f"[ERROR] Handler exception: {str(e)}")
        import traceback
        print(f"[ERROR] Traceback: {traceback.format_exc()}")
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }