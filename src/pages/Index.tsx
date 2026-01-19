import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* BLOCK 1: HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple">АПГРЕЙД</div>
          <nav className="hidden md:flex gap-8">
            <a href="#quest" className="hover:text-purple transition-colors">Квест</a>
            <a href="#packages" className="hover:text-purple transition-colors">Пакеты</a>
            <a href="#author" className="hover:text-purple transition-colors">О Дарье</a>
            <a href="#faq" className="hover:text-purple transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="text-sm hover:text-purple transition-colors">Контакты</a>
            <Button onClick={scrollToPackages} className="bg-purple hover:bg-purple-dark">
              Участвовать
            </Button>
          </div>
        </div>
      </header>

      {/* BLOCK 2: HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple/10 via-white to-turquoise/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-purple mb-4">
                АПГРЕЙД
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
                Квест 14 дней
              </h2>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise" size={24} />
                  <span className="text-lg">Первый запуск</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise" size={24} />
                  <span className="text-lg">Только 30 участниц</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise" size={24} />
                  <span className="text-lg">500+ женщин уже трансформировались</span>
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={scrollToPackages}
                className="bg-purple hover:bg-purple-dark text-white text-lg px-8 py-6"
              >
                Начать трансформацию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple via-gold to-turquoise p-1">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/ed2e8d1c-1316-48f4-a1b2-75074484b4f5.jpg" 
                  alt="Женщина в фиолетовом платье"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3: ПРОБЛЕМА */}
      <section id="quest" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/f3ba1398-9bce-4b19-81ed-8504683c2919.jpg" 
                  alt="Трансформация: до и после"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gold mb-6">Узнаёшь себя?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ты успешна, у тебя карьера, семья... но внутри пусто. 
                Нет радости от достижений. Только усталость и опустошение.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  'Встаёшь утром уже уставшей',
                  'Радуешь всех, но не себя',
                  'Не чувствуешь своих желаний',
                  'Живёшь на автопилоте',
                  'Нет энергии на "хочу"',
                  'Раздражает всё и все',
                  'Забыла, когда радовалась',
                  'Чувствуешь вину за отдых',
                  'Не узнаёшь себя в зеркале'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-100 border-l-4 border-gold p-4 rounded">
                <p className="text-lg font-semibold text-gray-800">
                  Это СИГНАЛ! Твоё тело и душа кричат о помощи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4: РЕШЕНИЕ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple mb-6">Есть выход</h2>
              <p className="text-lg text-gray-700 mb-8">
                За 14 дней ты пройдёшь через 4 этапа восстановления:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-lg">
                    <Icon name="Flame" className="text-purple" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Очищение</h3>
                    <p className="text-gray-600">Избавление от токсичных установок и чужих ожиданий</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Icon name="Zap" className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Ресурс</h3>
                    <p className="text-gray-600">Восстановление энергии и жизненных сил</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-turquoise/10 p-3 rounded-lg">
                    <Icon name="Target" className="text-turquoise" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Переосмысление</h3>
                    <p className="text-gray-600">Новый взгляд на себя и свою жизнь</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-lg">
                    <Icon name="Trophy" className="text-purple" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Переплавка</h3>
                    <p className="text-gray-600">Создание новой версии себя</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-200 via-purple/20 to-gold/20 flex items-center justify-center">
                <Icon name="ArrowRight" size={64} className="text-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5: ЧТО ПОЛУЧИТ */}
      <section className="py-20 bg-gradient-to-br from-purple/5 to-turquoise/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple">Что ты получишь</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Sparkles', title: 'Очищение', desc: 'Освобождение от токсичных установок' },
              { icon: 'Zap', title: 'Ресурс', desc: 'Восстановление энергии и сил' },
              { icon: 'Heart', title: 'Радость', desc: 'Возвращение к себе настоящей' },
              { icon: 'Wrench', title: 'Инструменты', desc: 'Практики на всю жизнь' },
              { icon: 'TrendingUp', title: 'Ценность', desc: 'Осознание своей значимости' },
              { icon: 'Users', title: 'Сообщество', desc: 'Поддержка единомышленниц' },
              { icon: 'Trophy', title: 'Кубок', desc: 'Шанс выиграть ценные призы' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-purple" size={32} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 6: КАК РАБОТАЕТ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple">Как работает квест</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple/20"></div>
              <div className="space-y-12">
                {[
                  { icon: 'Mail', time: '5 минут', title: 'Письмо каждое утро', desc: 'Практики и задания на день' },
                  { icon: 'Video', time: '15 минут', title: 'Видео-уроки', desc: 'Глубокое погружение в тему' },
                  { icon: 'CheckSquare', time: '2 минуты', title: 'Чек-листы', desc: 'Отслеживание прогресса' },
                  { icon: 'MessageCircle', time: '24/7', title: 'Telegram-чат (Элит)', desc: 'Поддержка и ответы на вопросы' }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center gap-8">
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left order-3'}`}>
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                      <span className="text-purple font-semibold">{item.time}</span>
                    </div>
                    <div className="relative z-10 bg-purple text-white p-4 rounded-full">
                      <Icon name={item.icon as any} size={24} />
                    </div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 7: ТРОЙНОЕ ОБНОВЛЕНИЕ */}
      <section className="py-20 bg-gradient-to-br from-purple via-gold to-turquoise">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Тройное обновление</h2>
          <p className="text-center text-white/90 mb-12 text-lg">Полная трансформация на всех уровнях</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Brain', title: 'УМ', desc: 'Новые нейронные связи, избавление от установок' },
              { icon: 'Heart', title: 'ТЕЛО', desc: 'Восстановление энергии, телесные практики' },
              { icon: 'Sparkles', title: 'ДУХ', desc: 'Возвращение к себе, смысл и ценности' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/95 hover:bg-white transition-all hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-purple" size={40} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-purple">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 8: ПАКЕТЫ */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple">Выбери свой пакет</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className={`hover:shadow-2xl transition-all ${selectedPackage === 'participant' ? 'ring-4 ring-purple' : ''}`}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">УЧАСТНИК</h3>
                  <div className="text-4xl font-bold text-purple mb-2">7 990 ₽</div>
                  <p className="text-gray-600">Осталось 18 мест</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    '14 дней писем и видео',
                    'Чек-листы и материалы',
                    'Доступ к записям 30 дней',
                    'Финальная встреча (день 14)',
                    'Участие в конкурсе призов'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-turquoise flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-purple hover:bg-purple-dark"
                  size="lg"
                  onClick={() => setSelectedPackage('participant')}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className={`relative hover:shadow-2xl transition-all ${selectedPackage === 'elite' ? 'ring-4 ring-gold' : ''}`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ⭐ ПОПУЛЯРНЫЙ
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">ЭЛИТ</h3>
                  <div className="text-4xl font-bold text-gold mb-2">14 990 ₽</div>
                  <p className="text-gray-600">Осталось 12 мест</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Всё из пакета УЧАСТНИК',
                    'Telegram-чат 24/7 с Дарьей',
                    '2 дополнительных вебинара',
                    'Доступ к записям 60 дней',
                    'Приоритет в конкурсе призов',
                    'Персональная обратная связь'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-gold flex-shrink-0 mt-1" size={20} />
                      <span className={index === 0 ? 'font-semibold' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gold hover:bg-gold/90"
                  size="lg"
                  onClick={() => setSelectedPackage('elite')}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOCK 9: ПРИЗЫ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple">Призы за участие</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { place: '🥇', title: '1 место', prize: 'Эфир в подкасте + Instagram (~12 000 ₽)', color: 'gold' },
              { place: '🥈', title: '2 место', prize: 'Видео-отзыв + Telegram + скидка 20% (~6 000 ₽)', color: 'gray-400' },
              { place: '🥉', title: '3 место', prize: 'Письменный отзыв + скидка 15% (~3 000 ₽)', color: 'orange-600' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{item.place}</div>
                  <h3 className={`text-2xl font-bold mb-4 text-${item.color}`}>{item.title}</h3>
                  <p className="text-gray-700">{item.prize}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-purple/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">Критерии оценки:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-purple" size={20} />
                    <span>Вложение в квест</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-purple" size={20} />
                    <span>Выполнение заданий</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-purple" size={20} />
                    <span>Честность с собой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-purple" size={20} />
                    <span>Активность в чате</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-purple" size={20} />
                    <span>Личностный рост</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOCK 10: О ДАРЬЕ */}
      <section id="author" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/ab54dcdf-5904-4742-bb95-ac18b91c0ed2.jpg" 
                    alt="Дарья"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-purple">О Дарье</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    2019 год. Карьера, успех, признание... Но внутри - пустота. 
                    Панические атаки, депрессия, ощущение, что живу не свою жизнь.
                  </p>
                  <p>
                    За 3 месяца я восстановилась. Нашла себя настоящую. 
                    Создала методику "Тройное обновление", которая помогла 500+ женщинам.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center p-4 bg-purple/10 rounded-lg">
                      <div className="text-3xl font-bold text-purple">8+</div>
                      <div className="text-sm text-gray-600">лет опыта</div>
                    </div>
                    <div className="text-center p-4 bg-purple/10 rounded-lg">
                      <div className="text-3xl font-bold text-purple">500+</div>
                      <div className="text-sm text-gray-600">женщин</div>
                    </div>
                  </div>
                  <div className="bg-purple/5 p-6 rounded-lg mt-6">
                    <p className="font-semibold text-purple">
                      Я прошла через это. Знаю, как больно. И знаю, как выйти. 
                      Даю только те инструменты, которые проверила на себе.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 11: FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-lg font-semibold hover:text-purple">
                  А вдруг не сработает для меня?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  100% возврат средств в течение 3 дней, если поймёшь, что это не твоё. Без вопросов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-lg font-semibold hover:text-purple">
                  У меня нет времени
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  15-20 минут в день. Можно делать по дороге на работу, в обед или перед сном. 
                  Практики встроятся в твой график.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-lg font-semibold hover:text-purple">
                  У меня серьёзная депрессия
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Квест дополняет работу с психотерапевтом, не заменяет её. 
                  Если принимаешь лекарства - продолжай, квест только поддержит.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-lg font-semibold hover:text-purple">
                  Это эзотерика?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Нет. Научно обоснованные техники: КПТ, mindfulness, телесные практики, 
                  нейропластичность. Никакой магии, только то, что работает.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-lg font-semibold hover:text-purple">
                  Я в другой часовой зоне
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Письма приходят утром по твоему времени. Записи доступны 24/7. 
                  Живые встречи записываются.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-lg font-semibold hover:text-purple">
                  Дорого для меня
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Пакет УЧАСТНИК — 7 990 ₽ (570 ₽/день трансформации). 
                  Есть рассрочка. Инвестиция в себя окупится качеством жизни.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* BLOCK 12: СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple">Результаты говорят сами</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Star', value: '⭐ ПЕРВЫЙ', label: 'запуск - ты одна из 30!' },
              { icon: 'Users', value: '500+', label: 'женщин трансформировались' },
              { icon: 'TrendingUp', value: '+150%', label: 'энергии после квеста' },
              { icon: 'CheckCircle2', value: '95%', label: 'применяют дальше' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Icon name={item.icon as any} className="text-purple mx-auto mb-4" size={40} />
                  <div className="text-3xl font-bold text-purple mb-2">{item.value}</div>
                  <p className="text-gray-600">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-turquoise/10 px-6 py-3 rounded-full">
              <Icon name="TrendingUp" className="text-turquoise" size={24} />
              <span className="font-semibold text-lg">98% благодарных отзывов</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 13: ФИНАЛЬНЫЙ ПРИЗЫВ */}
      <section className="py-20 bg-gradient-to-br from-purple via-purple-dark to-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">ЭТО ТВОЙ ЗНАК</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Ты читаешь это не случайно. Пора вернуть себе радость, энергию и жизнь, 
            которую ты заслуживаешь.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              onClick={scrollToPackages}
              className="bg-white text-purple hover:bg-gray-100 text-xl px-12 py-8 font-bold"
            >
              ЗАБРОНИРОВАТЬ МЕСТО
            </Button>
            <div className="flex items-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span>Старт 3 февраля</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span>Только 30 мест</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={20} />
                <span>Живой квест</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 14: FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple mb-4">АПГРЕЙД</h3>
              <p className="text-gray-400 mb-4">
                Квест для женщин, которые хотят вернуть себе радость и энергию жизни
              </p>
              <div className="flex gap-4">
                <Icon name="Mail" className="text-purple" size={24} />
                <Icon name="MessageCircle" className="text-purple" size={24} />
                <Icon name="Phone" className="text-purple" size={24} />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@apgreid.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @apgreid</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>WhatsApp: +7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Оплата</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Сбербанк • Яндекс.Касса</p>
                <p>Рассрочка доступна</p>
                <p className="pt-4">ИП "АПГРЕЙД"</p>
                <p>ОГРН 123456789012</p>
                <div className="flex items-center gap-2 pt-2">
                  <Icon name="Lock" size={16} className="text-turquoise" />
                  <span className="text-turquoise">100% возврат в течение 3 дней</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 АПГРЕЙД. Все права защищены.</p>
            <p className="mt-2">Сделано с 💜 для твоей трансформации</p>
          </div>
        </div>
      </footer>
    </div>
  );
}