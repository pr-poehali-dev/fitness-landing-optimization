import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ISAFE Academy</div>
          <div className="hidden md:flex gap-6">
            <a onClick={() => scrollToSection('hero')} className="cursor-pointer hover:text-primary transition">Главная</a>
            <a onClick={() => scrollToSection('benefits')} className="cursor-pointer hover:text-primary transition">Преимущества</a>
            <a onClick={() => scrollToSection('program')} className="cursor-pointer hover:text-primary transition">Программа</a>
            <a onClick={() => scrollToSection('results')} className="cursor-pointer hover:text-primary transition">Результаты</a>
            <a onClick={() => scrollToSection('reviews')} className="cursor-pointer hover:text-primary transition">Отзывы</a>
            <a onClick={() => scrollToSection('pricing')} className="cursor-pointer hover:text-primary transition">Тарифы</a>
            <a onClick={() => scrollToSection('contacts')} className="cursor-pointer hover:text-primary transition">Контакты</a>
          </div>
          <Button onClick={() => scrollToSection('pricing')} size="lg" className="hidden md:flex">
            Записаться на курс
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-lg px-4 py-2">Старт через 7 дней</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Станьте <span className="text-primary">высокооплачиваемым</span> фитнес-тренером
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Получите престижную профессию за 2 месяца и зарабатывайте от <span className="font-bold text-accent">100 000 ₽</span> в месяц
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={() => scrollToSection('pricing')} size="lg" className="text-lg px-8 py-6">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button onClick={() => scrollToSection('program')} variant="outline" size="lg" className="text-lg px-8 py-6">
                  Узнать программу
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Трудоустроены</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">150 000₽</div>
                  <div className="text-sm text-muted-foreground">Средний доход</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/94a0ed65-5d1e-4bbc-a8ec-ec6994e68be4.png" 
                alt="Профессиональный фитнес-тренер"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">Инвестиция в свое будущее с гарантированным результатом</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Диплом гос. образца</h3>
                <p className="text-muted-foreground">
                  Лицензированная программа с официальным дипломом, который признают все фитнес-клубы России
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Высокий доход</h3>
                <p className="text-muted-foreground">
                  Наши выпускники зарабатывают от 100 000 ₽, а топ-тренеры получают более 300 000 ₽ в месяц
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Briefcase" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Гарантия трудоустройства</h3>
                <p className="text-muted-foreground">
                  Помогаем с поиском работы в лучших фитнес-клубах. 98% выпускников трудоустроены в первый месяц
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Поддержка кураторов</h3>
                <p className="text-muted-foreground">
                  Личный куратор на протяжении всего обучения. Помощь с практикой и разбором сложных тем
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Гибкий график</h3>
                <p className="text-muted-foreground">
                  Онлайн-формат позволяет учиться в удобное время, совмещая с работой или другой деятельностью
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Zap" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Быстрый результат</h3>
                <p className="text-muted-foreground">
                  Всего 2 месяца обучения — и вы готовый специалист с практическими навыками и дипломом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Программа обучения</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">Комплексная подготовка за 8 недель</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Анатомия и физиология</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Строение мышечной системы</li>
                      <li>• Биомеханика движений</li>
                      <li>• Физиология нагрузок</li>
                      <li>• Профилактика травм</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Теория тренировок</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Методики тренинга</li>
                      <li>• Составление программ</li>
                      <li>• Периодизация нагрузок</li>
                      <li>• Работа с разными целями</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Практическая часть</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Техника упражнений</li>
                      <li>• Работа с тренажерами</li>
                      <li>• Функциональный тренинг</li>
                      <li>• Стретчинг и восстановление</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Питание и диетология</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Основы нутрициологии</li>
                      <li>• Расчет калорийности</li>
                      <li>• Спортивное питание</li>
                      <li>• Работа с весом клиента</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Психология и мотивация</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Работа с клиентами</li>
                      <li>• Техники мотивации</li>
                      <li>• Построение доверия</li>
                      <li>• Удержание клиентов</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Бизнес для тренера</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Продвижение в соцсетях</li>
                      <li>• Формирование цен</li>
                      <li>• Личный бренд тренера</li>
                      <li>• Онлайн-тренировки</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Что вы получите</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">Конкретные результаты после обучения</p>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/1423d94b-75c4-4c5b-959d-a841a1205259/files/697319bc-d2d9-4cb5-955c-e1bc48b5c480.jpg" 
              alt="Результаты обучения"
              className="rounded-2xl shadow-2xl mb-12"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Диплом государственного образца</h4>
                  <p className="text-muted-foreground">Официальный документ о профессиональной переподготовке</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Практические навыки</h4>
                  <p className="text-muted-foreground">Уверенное владение всеми техниками и методиками</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Портфолио готовых программ</h4>
                  <p className="text-muted-foreground">10+ разработанных тренировочных планов</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">База клиентов</h4>
                  <p className="text-muted-foreground">Методики привлечения и удержания</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Сертификаты партнеров</h4>
                  <p className="text-muted-foreground">Дополнительные сертификаты от ведущих брендов</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Доступ к комьюнити</h4>
                  <p className="text-muted-foreground">Сеть профессиональных тренеров и обмен опытом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы выпускников</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">Истории успеха наших студентов</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "За 3 месяца после окончания курса мой доход вырос до 180 тысяч рублей. Академия дала не только знания, но и уверенность в себе. Рекомендую всем!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Анна Петрова</div>
                    <div className="text-sm text-muted-foreground">Персональный тренер, Москва</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Сменил офисную работу на тренерскую деятельность. Сейчас зарабатываю в 2 раза больше и получаю удовольствие от работы. Лучшее решение в моей жизни!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Дмитрий Соколов</div>
                    <div className="text-sm text-muted-foreground">Фитнес-тренер, Санкт-Петербург</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Академия помогла мне открыть свою студию. Теперь у меня 15 постоянных клиентов и доход более 250 тысяч в месяц. Спасибо за знания и поддержку!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Екатерина Волкова</div>
                    <div className="text-sm text-muted-foreground">Владелец студии, Екатеринбург</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифы обучения</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">Выберите подходящий вариант инвестиции в свое будущее</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Базовый</h3>
                <div className="text-4xl font-bold text-primary mb-6">39 900 ₽</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Все обучающие материалы</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Диплом гос. образца</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Доступ к платформе 3 месяца</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Тестирование знаний</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="X" className="text-muted-foreground flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Личный куратор</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg" variant="outline">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary relative hover:shadow-2xl transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-white px-6 py-2 text-sm">Популярный</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Профессиональный</h3>
                <div className="text-4xl font-bold text-primary mb-6">59 900 ₽</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Все обучающие материалы</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Диплом гос. образца</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Доступ к платформе 6 месяцев</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Личный куратор</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Помощь с трудоустройством</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">VIP</h3>
                <div className="text-4xl font-bold text-primary mb-6">89 900 ₽</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Все обучающие материалы</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Диплом гос. образца</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Доступ навсегда</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Личный наставник-эксперт</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Гарантия трудоустройства</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Бизнес-консультации</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">Возможна рассрочка на 12 месяцев без переплат</p>
            <p className="text-sm text-muted-foreground">от 3 325 ₽/месяц</p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Свяжитесь с нами прямо сейчас и получите бесплатную консультацию по программе обучения
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold">Телефон</div>
                      <a href="tel:+79001234567" className="text-primary hover:underline">+7 (900) 123-45-67</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold">Email</div>
                      <a href="mailto:info@isafe-academy.ru" className="text-primary hover:underline">info@isafe-academy.ru</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold">Telegram</div>
                      <a href="https://t.me/isafe_academy" className="text-primary hover:underline">@isafe_academy</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/1423d94b-75c4-4c5b-959d-a841a1205259/files/c283ca10-24f3-40eb-b2f2-3044a8d12fb0.jpg" 
                  alt="Свяжитесь с нами"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ISAFE Academy</div>
              <p className="text-gray-400">
                Лицензированная академия подготовки профессиональных фитнес-тренеров
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#program" className="hover:text-white transition">Программа</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Тарифы</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#benefits" className="hover:text-white transition">Преимущества</a></li>
                <li><a href="#results" className="hover:text-white transition">Результаты</a></li>
                <li><a href="#contacts" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (900) 123-45-67</li>
                <li>info@isafe-academy.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ISAFE Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;