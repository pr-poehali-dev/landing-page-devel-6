"""
Telegram-бот для обратной связи с посетителями сайта.
Отвечает на вопросы о программе АПГРЕЙД на основе информации с сайта.
"""

import json
import os
from typing import Dict, Any
import requests

SITE_KNOWLEDGE = {
    "о квесте": """АПГРЕЙД — это 14-дневный квест-челлендж для женщин 35+.

🎯 Старт: 9 февраля 2026

Квест помогает, если ты:
• Устала от одинаковых дней
• Чувствуешь апатию и раздражение
• Потеряла радость и вдохновение  
• Ищешь перезагрузку и новую энергию

За 14 дней ты пройдёшь путь от уровня L1 до L4 ЛЕГЕНДАРНЫЙ! 💜""",

    "пакеты": """Выбери свой пакет:

📦 СТАНДАРТ — 4 900 ₽
• Полное участие в квесте
• Ежедневные задания
• Лидерборд + прокачка аватара
• Живое сообщество
• Онлайн-встреча в ZOOM
• Приз по завершению

👑 ПРЕМИУМ — 6 900 ₽
• ВСЁ из Стандарта
• ИНДИВИДУАЛЬНЫЙ АНАЛИЗ:
  - Нумерология
  - Астрология  
  - Хьюман Дизайн
  - Икигай
  - Персональные перспективы на 2026

💎 VIP — 9 900 ₽
• ВСЁ из Премиума
• ЛИЧНОЕ СОПРОВОЖДЕНИЕ:
  - 2 недели после завершения
  - 1-на-1 консультации
  - Дарья рядом с тобой""",

    "цена": """Стоимость участия:

📦 СТАНДАРТ — 4 900 ₽
👑 ПРЕМИУМ — 6 900 ₽
💎 VIP — 9 900 ₽

Выбери формат, который подходит тебе! 💜""",

    "аватары": """В квесте 5 архетипов-аватаров:

🔥 ФЕНИКС ИЗ ПЕПЛА
"От выгорания к сияющей энергии"

💜 КОРОЛЕВА ПЕРЕМЕН  
"От замужества к королевству"

✨ БОГИНЯ ВОССТАНОВЛЕНИЯ
"От рассеяния к целостности"

🌟 ВОИТЕЛЬНИЦА СВЕТА
"От сомнений к уверенности"

🌊 ПРОВОДНИЦА ПОТОКА
"От суеты к гармонии"

Узнала себя? За 14 дней ты пройдёшь путь от L1 до L4 ЛЕГЕНДАРНЫЙ! 🚀""",

    "контакты": """Свяжись со мной напрямую:
📱 WhatsApp: +7 914 704 7392
💬 Telegram: @darya_tsybulskaya22
📸 Instagram: @darya_tsybulskaya22

Владивосток, Дальний Восток 🌊""",

    "запись": """Чтобы записаться на программу, напиши мне:
📱 WhatsApp: +7 914 704 7392
💬 Telegram: @darya_tsybulskaya22

Или выбери формат на сайте и оплати онлайн! 💜"""
}


def get_bot_response(user_message: str) -> str:
    """Получить ответ бота на основе базы знаний"""
    message_lower = user_message.lower()
    
    # Проверяем ключевые слова
    if any(word in message_lower for word in ["пакет", "формат", "вариант", "какие", "выбрать"]):
        return SITE_KNOWLEDGE["пакеты"]
    
    if any(word in message_lower for word in ["цена", "стоимость", "сколько", "стоит", "рубл"]):
        return SITE_KNOWLEDGE["цена"]
    
    if any(word in message_lower for word in ["аватар", "кто я", "тип", "застрявш", "выгоревш", "замёрзш"]):
        return SITE_KNOWLEDGE["аватары"]
    
    if any(word in message_lower for word in ["контакт", "связ", "телефон", "whatsapp", "инстаграм"]):
        return SITE_KNOWLEDGE["контакты"]
    
    if any(word in message_lower for word in ["записа", "присоедин", "купить", "оплат", "как начать"]):
        return SITE_KNOWLEDGE["запись"]
    
    if any(word in message_lower for word in ["квест", "програм", "апгрейд", "что это", "о чём", "зачем"]):
        return SITE_KNOWLEDGE["о квесте"]
    
    # Ответ по умолчанию
    return """Привет! 👋

Я помогу тебе узнать о квесте АПГРЕЙД.

Напиши что тебя интересует:
• О квесте  
• Пакеты и цены
• Аватары
• Как записаться

Или сразу пиши Дарье: @darya_tsybulskaya22 💜"""


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

Я помощник Дарьи Цыбульской по квесту АПГРЕЙД — 14-дневной трансформации для женщин 35+.

Старт: 9 февраля 2026

Спрашивай что угодно:
• О квесте и аватарах
• Пакеты и цены (от 4 900₽)
• Как проходит квест
• Как записаться

Или сразу пиши Дарье: @darya_tsybulskaya22 💜"""
        else:
            response_text = get_bot_response(user_text)
        
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
                'text': response_text
            },
            timeout=10
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