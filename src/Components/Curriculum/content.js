import React from 'react';
import styled from 'styled-components';
import { A } from '../MainPage/content';

const Div = styled.div`
  margin-bottom: 5px;
`;

const SmallA = styled(A)`
  font-size: 14px;
  margin: 0;
  margin-right: 5px;
`;

const content = {
  ru: [
    <b>Бережной Иван Станиславович</b>,
    <ul>
      <li>г. Екатеринбург</li>
      <li>extohell@gmail.com</li>
      <li>+7(963)-156-37-57</li>
      <li>
        <SmallA href='https://github.com/extohell' target='_blank' rel='noreferrer'>
          https://github.com/extohell
        </SmallA>
      </li>
    </ul>,
    <span>
      <b>Цель:</b>
      <br />
      Активно развиваться как frontend разработчик.
    </span>,
    <div>
      <b>О себе:</b>
      <br />
      <div>
        <Div>Я front-end разработчик - самоучка.</Div>
        <Div>
          Занимался самообучением при помощи различных онлайн-курсов (например на сайте udemy.com), книг и YouTube. Не
          останавливаюсь на достигнутом, продолжаю с интересом изучать новые для меня технологии, слежу за новинками в
          мире frontend разработки и самое главное - получаю удовольствие от своей работы.
        </Div>
        В процессе обучения придерживался принципа: любая теория должна быть подкреплена практикой.
      </div>
    </div>,
    <div>
      <b>Навыки:</b>
      <br />
      <ol>
        <li>Уверенные знания HTML5, CSS3, SASS/SCSS, JavaScript (ES6).</li>
        <li>React, Redux, CSS in JS (Styled Components, CSS Modules), основы TypeScript.</li>
        <li>Vue, Vuex, Nuxt.</li>
        <li>Базовые знания backend, PHP, Node.js, MySQL, MongoDB.</li>
        <li>Работа с GIT.</li>
        <li>Photoshop, Figma, Zeppelin для работы с макетами.</li>
        <li>Вёрстка по БЭМ методологии, опыт использования Jquery, Bootstrap.</li>
      </ol>
    </div>,
    <div>
      <b>Проекты:</b>
      <br />
      <b>Сайт-визитка для художника-аквагримёра</b>
      <br />
      <ol>
        <li>
          Использованные технологии: только нативный JavaScript, HTML, Sass и PHP, MySQL для создания страницы с
          отзывами и фото-галереи.
        </li>
        <li>Сайт адаптирован под различные разрешения и мобильные устройства.</li>
        <li>
          Для реализации части на PHP изучал язык и основные принципы, используя книгу “PHP 7 в подлиннике” Д. Котерова
          и видеокурс по написанию собственной CMS интернет-магазина.
        </li>
      </ol>
    </div>,
    <div>
      <b>Опыт работы:</b>
      <div>
        <div>11.2020 — по настоящее время</div>
        <div>ООО "Авто-Траст", Екатеринбург.</div>
        <div>Frontend-разработчик.</div>
        <div>
          Разработка и поддержка B2C сайта компании —{' '}
          <SmallA href='https://planetavto.ru' target='_blank' rel='noreferrer'>
            https://planetavto.ru
          </SmallA>
        </div>
        <div>Стек технологий: Vue, Nuxt.</div>
      </div>
    </div>,
    <div>
      <b>Образование:</b>
      <br />
      2005 – 2010
      <br />
      Челябинский Государственный Агроинженерный Университет. Факультет Электрификации и автоматизации
      сельскохозяйственного производства.
      <br />
      Специализация: Автоматизация технологических процессов.
    </div>,
    <div>
      <b>Дополнительная информация:</b>
      <ol>
        <li>Языки: Английский B1 Intermediate, Испанский B1 Intermedio.</li>
        <li>Семейное положение: холост, детей нет.</li>
      </ol>
    </div>
  ],
  en: [
    <b>Ivan Berezhnoi</b>,
    <ul>
      <li>Yekaterinburg city, Russia</li>
      <li>extohell@gmail.com</li>
      <li>+7(963)-156-37-57</li>
      <li>
        <SmallA href='https://github.com/extohell' target='_blank' rel='noreferrer'>
          https://github.com/extohell
        </SmallA>
      </li>
    </ul>,
    <span>
      <b>Objective:</b>
      <br />
      To actively develop as a frontend developer.
    </span>,
    <div>
      <b>About me:</b>
      <br />
      <div>
        <Div>I'm a self-taught front-end developer.</Div>
        <Div>
          Self-taught with a variety of online courses (such as udemy.com), books and YouTube. I don't stop there, I
          continue to study with interest new technologies for me, I follow the novelties in frontend development and
          most importantly - I enjoy my work.
        </Div>
        In the learning process, I adhere to the principle: any theory must be supported by practice.
      </div>
    </div>,
    <div>
      <b>Skills:</b>
      <br />
      <ol>
        <li>Strong knowledge of HTML5, CSS3, SASS / SCSS, JavaScript (ES6).</li>
        <li>React, Redux, CSS in JS (Styled Components, CSS Modules), TypeScript basics.</li>
        <li>Vue, Vuex, Nuxt.</li>
        <li>Basic knowledge of backend, PHP, Node.js, MySQL, MongoDB.</li>
        <li>Working with GIT.</li>
        <li>Photoshop, Figma, Zeppelin for HTML coding.</li>
        <li>BEM methodology, experience of using Jquery, Bootstrap.</li>
      </ol>
    </div>,
    <div>
      <b>Completed projects:</b>
      <br />
      <b>Website for make-up artist</b>
      <br />
      <ol>
        <li>
          Technologies used: only native JavaScript, HTML, Sass and PHP, MySQL for creating a page with reviews and
          photo-gallery.
        </li>
        <li>The site is adapted for various resolutions and mobile devices.</li>
        <li>
          To implement the part in PHP, I studied the language and basic principles, using the book "PHP 7 in the
          original" by D. Koterov and a video course on writing your own online-store CMS.
        </li>
      </ol>
    </div>,
    <div>
      <b>Experience:</b>
      <div>
        <div>11/2020 - present</div>
        <div>Auto-Trust LLC, Ekaterinburg.</div>
        <div>Frontend developer.</div>
        <div>
          Development and support of the company's B2C website —
          <SmallA href='https://planetavto.ru' target='_blank' rel='noreferrer'>
            https://planetavto.ru
          </SmallA>
        </div>
        <div>Technologies: Vue, Nuxt.</div>
      </div>
    </div>,
    <div>
      <b>Education:</b>
      <br />
      2005 – 2010
      <br />
      Chelyabinsk State Agroengineering University. Faculty of Electrification and Automation of Agricultural
      Production.
      <br />
      Specialization: Automation of technological processes.
    </div>,
    <div>
      <b>Additional Information:</b>
      <ol>
        <li>Languages: English B1 Intermediate, Spanish B1 Intermediate.</li>
        <li>Marital status: single, no children.</li>
      </ol>
    </div>
  ],
  es: [
    <b>Ivan Berezhnoi</b>,
    <ul>
      <li>c. Yekaterinburg, Rusia</li>
      <li>extohell@gmail.com</li>
      <li>+7(963)-156-37-57</li>
      <li>
        <SmallA href='https://github.com/extohell' target='_blank' rel='noreferrer'>
          https://github.com/extohell
        </SmallA>
      </li>
    </ul>,
    <span>
      <b>Objetivo:</b>
      <br />
      Desarrollarme activamente como desarrollador frontend.
    </span>,
    <div>
      <b>Sobre mí:</b>
      <br />
      <div>
        <Div>Soy un desarrollador front-end autodidacta.</Div>
        <Div>
          Autodidacta con una variedad de cursos (como udemy.com), libros y YouTube. No me detengo, sigo estudiando con
          interés las nuevas tecnologías para mí, observo a las novedades en desarrollo frontend y, lo más importante,
          disfruto de mi trabajo.
        </Div>
        En el proceso de aprendizaje me adhiero al principio: cualquier teoría debe estar respaldada por la práctica.
      </div>
    </div>,
    <div>
      <b>Habilidades:</b>
      <br />
      <ol>
        <li>Fuerte conocimiento de HTML5, CSS3, SASS / SCSS, JavaScript (ES6).</li>
        <li>React, Redux, CSS in JS (Styled Components, CSS Modules), conceptos básicos de TypeScript.</li>
        <li>Vue, Vuex, Nuxt.</li>
        <li>Conocimientos básicos de backend, PHP, Node.js, MySQL, MongoDB.</li>
        <li>Trabajo con GIT.</li>
        <li>Photoshop, Figma, Zeppelin para trabajar con diseños.</li>
        <li>BEM metodología, experiencia en el uso de Jquery, Bootstrap.</li>
      </ol>
    </div>,
    <div>
      <b>Proyectos realizados:</b>
      <br />
      <b>Sitio web de artista de maquillaje acuático</b>
      <br />
      <ol>
        <li>
          Tecnologías utilizadas: solo JavaScript nativo, HTML, Sass y PHP, MySQL para crear una página con reseñas y
          galerías de fotos.
        </li>
        <li>El sitio está adaptado para varias resoluciones y dispositivos móviles.</li>
        <li>
          Para implementar la parte en PHP, estudié el lenguaje y los principios básicos, usando el libro "PHP 7 en el
          original" de D. Koterov y un curso de video sobre cómo escribir su propia CMS de tienda en línea.
        </li>
      </ol>
    </div>,
    <div>
      <b>Experiencia laboral:</b>
      <div>
        <div>11/2020 - presente</div>
        <div>Auto-Trust LLC, Ekaterinburg.</div>
        <div>Frontend developer.</div>
        <div>
          Desarrollo y soporte del sitio web B2C de la empresa —{' '}
          <SmallA href='https://planetavto.ru' target='_blank' rel='noreferrer'>
            https://planetavto.ru
          </SmallA>
        </div>
        <div>Tecnologías: Vue, Nuxt.</div>
      </div>
    </div>,
    <div>
      <b>Educación:</b>
      <br />
      2005 – 2010
      <br />
      Universidad Estatal de Agroingeniería de Chelyabinsk. Facultad de Electrificación y Automatización de la
      Producción Agraria.
      <br />
      Especialización: Automatización de procesos tecnológicos.
    </div>,
    <div>
      <b>Información adicional:</b>
      <ol>
        <li>Idiomas: Inglés B1 Intermedio, Español B1 Intermedio.</li>
        <li>Estado civil: soltero, no tengo hijos.</li>
      </ol>
    </div>
  ]
};

export default content;
