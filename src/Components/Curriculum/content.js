import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	margin-bottom: 5px;
`;

const content = {
	ru: [
		<b>Бережной Иван Станиславович</b>,
		<ul>
			<li>г. Екатеринбург</li>
			<li>extohell@gmail.com</li>
			<li>+7(963)-156-37-57</li>
			<li><a href="https://github.com/extohell">https://github.com/extohell</a></li>
		</ul>,
		<span><b>Цель:</b><br/>Начать карьеру junior front-end developer и активно развиваться в этом направлении.</span>,
		<div>
			<b>О себе:</b><br/>
			<div>
				<Div>Я front-end разработчик - самоучка.</Div>
				<Div>Верстку, html, css и основы javascript освоил на сайте HTML Academy. Прошел несколько курсов по
					javascript и React на сайте udemy.com. Активно использую youtube, сайт learn.javascript.ru и такие
					книги
					как “Javascript. Подробное руководство” (Флэнаган Дэвид), “Вы не знаете JS” (Кайл Симпсон), “React и
					Redux. Функциональная веб-разработка” (Алекс Бэнкс, Ева Порсело).
				</Div>
				В процессе обучения придерживался принципа: любая теория должна быть подкреплена практикой.
			</div>
		</div>,
		<div>
			<b>Навыки:</b><br/>
			<ol>
				<li>Уверенные знания HTML5, CSS3, SASS/SCSS, JavaScript (ES6).</li>
				<li>React, Redux, CSS in JS (Styled Components, CSS Modules), основы TypeScript.</li>
				<li>Vue, Vuex, Nuxt.</li>
				<li>Базовые знания backend, PHP, работа с базами данных, MySQL.</li>
				<li>Основы работы с GIT.</li>
				<li>Photoshop, Figma для работы с макетами.</li>
				<li>Вёрстка по БЭМ методологии, опыт использования Jquery, Bootstrap.</li>
			</ol>
		</div>,
		<div>
			<b>Проекты:</b><br/>
			<b>Сайт-визитка для художника-аквагримёра</b><br/>
			<ol>
				<li>Использованные технологии: только нативный JavaScript, HTML, Sass и PHP, MySQL для создания страницы
					с отзывами и фото-галереи.
				</li>
				<li>Сайт адаптирован под различные разрешения и мобильные устройства.</li>
				<li>Для реализации части на PHP изучал язык и основные принципы, используя книгу “PHP 7 в подлиннике” Д.
					Котерова и видеокурс по написанию собственной CMS интернет-магазина.
				</li>
			</ol>
		</div>,
		<div>
			<b>Опыт работы:</b>
			<div>
				<Div>Большая часть моего трудового стажа связана с работой по специальности (инженер - электрик):</Div>
				<div>электромонтажные работы;</div>
				<div>инженер-электрик;</div>
				<div>проектировщик электрических обогревательных систем.</div>
				<div>Последние несколько лет работал в сфере торговли электрооборудованием.</div>
			</div>
		</div>,
		<div>
			<b>Образование:</b><br/>
			2005 – 2010<br/>
			Челябинский Государственный Агроинженерный Университет. Факультет
			Электрификации и автоматизации сельскохозяйственного производства.<br/>
			Специализация: Автоматизация технологических процессов.
		</div>,
		<div>
			<b>Дополнительная информация:</b>
			<ol>
				<li>Языки: Английский B1 Intermediate, Испанский A2 Principiante.</li>
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
			<li><a href="https://github.com/extohell">https://github.com/extohell</a></li>
		</ul>,
		<span><b>Objective:</b><br/>Start a career as a junior front-end developer and actively progress in this direction.</span>,
		<div>
			<b>About me:</b><br/>
			<div>
				<Div>I'm a self-taught front-end developer.</Div>
				<Div>I mastered html, css and the basics of javascript on the HTML Academy website. Took several courses
					on javascript and React on udemy.com. I actively use youtube, learn.javascript.ru and such books as
					“JavaScript Pocket Reference.” (Flanagan David), “You Don't Know JS.” (Kyle Simpson), “React and
					Redux. Functional Web Development. ” (Alex Banks, Eva Porcelo).
				</Div>In the learning process, I adhere to the principle: any theory must be supported by practice.
			</div>
		</div>,
		<div>
			<b>Skills:</b><br/>
			<ol>
				<li>Strong knowledge of HTML5, CSS3, SASS / SCSS, JavaScript (ES6).</li>
				<li>React, Redux, CSS in JS (Styled Components, CSS Modules), TypeScript basics.</li>
				<li>Vue, Vuex, Nuxt.</li>
				<li>Basic knowledge of backend, PHP, working with databases, MySQL.</li>
				<li>Working with GIT.</li>
				<li>Photoshop, Figma for HTML coding.</li>
				<li>BEM methodology, experience of using Jquery, Bootstrap.</li>
			</ol>
		</div>,
		<div>
			<b>Completed projects:</b><br/>
			<b>Website for make-up artist</b><br/>
			<ol>
				<li>Technologies used: only native JavaScript, HTML, Sass and PHP, MySQL for creating a page with
					reviews and photo-gallery.
				</li>
				<li>The site is adapted for various resolutions and mobile devices.</li>
				<li>To implement the part in PHP, I studied the language and basic principles, using the book "PHP 7 in
					the original" by D. Koterov and a video course on writing your own online-store CMS.
				</li>
			</ol>
		</div>,
		<div>
			<b>Experience:</b>
			<div>
				<Div>Most of my work experience is related with my electrical engineer specialty:</Div>
				<div>Electric installation work;</div>
				<div>Electrical Engineer;</div>
				<div>Designer of electrical heating systems.</div>
				<div>For the last few years I have been working in the electrical trade.</div>
			</div>
		</div>,
		<div>
			<b>Education:</b><br/>
			2005 – 2010<br/>
			Chelyabinsk State Agroengineering University. Faculty of Electrification and Automation of Agricultural
			Production.<br/>
			Specialization: Automation of technological processes.
		</div>,
		<div>
			<b>Additional Information:</b>
			<ol>
				<li>Languages: English B1 Intermediate, Spanish A2 Principiante.</li>
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
			<li><a href="https://github.com/extohell">https://github.com/extohell</a></li>
		</ul>,
		<span><b>Objetivo:</b><br/>
		Empiece una carrera como junior front-end developer y desarrolle activamente en esta dirección.</span>,
		<div>
			<b>Sobre mí:</b><br/>
			<div>
				<Div>Soy un desarrollador front-end autodidacta.</Div>
				<Div>Aprendí html, css y los conceptos básicos de javascript en el sitio web de HTML Academy. Tomó
					varios cursos sobre javascript y React en udemy.com. Uso activamente youtube, learn.javascript.ru y
					libros como “JavaScript Pocket Reference.” (Flanagan David), “You Don't Know JS.” (Kyle Simpson),
					“React and Redux. Functional Web Development. ” (Alex Banks, Eva Porcelo).</Div>
				En el proceso de aprendizaje me adhiero al principio: cualquier teoría debe estar respaldada por la
				práctica.
			</div>
		</div>,
		<div>
			<b>Habilidades:</b><br/>
			<ol>
				<li>Fuerte conocimiento de HTML5, CSS3, SASS / SCSS, JavaScript (ES6).</li>
				<li>React, Redux, CSS in JS (Styled Components, CSS Modules), conceptos básicos de TypeScript.</li>
				<li>Vue, Vuex, Nuxt.</li>
				<li>Conocimientos básicos de backend, PHP, trabajo con bases de datos, MySQL.</li>
				<li>Trabajo con GIT.</li>
				<li>Photoshop, Figma para trabajar con diseños.</li>
				<li>BEM metodología, experiencia en el uso de Jquery, Bootstrap.</li>
			</ol>
		</div>,
		<div>
			<b>Proyectos realizados:</b><br/>
			<b>Sitio web de artista de maquillaje acuático</b><br/>
			<ol>
				<li>Tecnologías utilizadas: solo JavaScript nativo, HTML, Sass y PHP, MySQL para crear una página con
					reseñas y galerías de fotos.
				</li>
				<li>El sitio está adaptado para varias resoluciones y dispositivos móviles.</li>
				<li>Para implementar la parte en PHP, estudié el lenguaje y los principios básicos, usando el libro "PHP
					7 en el original" de D. Koterov y un curso de video sobre cómo escribir su propia CMS de tienda en
					línea.</li>
			</ol>
		</div>,
		<div>
			<b>Experiencia laboral:</b>
			<div>
				<Div>La mayor parte de mi experiencia laboral está relacionada con el trabajo en la especialidad (ingeniero eléctrico):</Div>
				<div>Trabajos de instalación eléctrica;</div>
				<div>Ingeniero eléctrico;</div>
				<div>Diseñador de sistemas eléctricos de calefacción.</div>
				<div>Durante los últimos años ha trabajado en el comercio de equipos eléctricos.</div>
			</div>
		</div>,
		<div>
			<b>Educación:</b><br/>
			2005 – 2010<br/>
			Universidad Estatal de Agroingeniería de Chelyabinsk. Facultad de Electrificación y Automatización de la Producción Agraria.<br/>
			Especialización: Automatización de procesos tecnológicos.
		</div>,
		<div>
			<b>Información adicional:</b>
			<ol>
				<li>Idiomas: Inglés B1 Intermedio, Español A2 Principiante.</li>
				<li>Estado civil: soltero, no tengo hijos.</li>
			</ol>
		</div>
	]
};

export default content;