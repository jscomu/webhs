import React from 'react';
import './App.css';
import frd from "./data/friend.json";
import FrdCom from "./FrdCom";

function App() {
  return (
    <div className="container">
    <header>
        <p>◇◇ 소개합니다</p>
        <div>
        <ul>
            <li><a href="#">소개</a></li>
            <li><a href="#sect2">친구</a></li>
            <li><a href="#sect3">위치</a></li>
        </ul>
        </div>
    </header>
    <section id="sect1">
        <p>넓고 푸른 바다</p>
        <p>아름다운 세상</p>
        <img src={process.env.PUBLIC_URL + '/img/ferrari.jpg'} className="proPhoto" alt="Person" />
        <div className='prodesc'>
            {frd.myprofile.map(my => (
                <ul>
                    <li>{my.name} : {my.value}</li>
                </ul>
            ))}
        </div>
        <p className='proessay'>저는 IT에 관심이 많은 학생입니다. 현재 프로그래밍 공부를 하고 있습니다. 스프링부트 프레임워크를 활용하여 웹사이트 구축을 하고 있습니다. 다음에 크로스플랫폼 모바일 APP 개발을 할 예정입니다.</p>
        <FrdCom />
    </section>
    <br /><br />
    <section id="sect2">
        <p>친구들</p>
        <div>
			{frd.friends.map(fr => (
				//<a href="#" key={fr.id}>안녕하세요. {fr.name}({fr.url}) 입니다.</a>
                <ul>
                    <li>
                        <span className='frphoto'><img src={process.env.PUBLIC_URL + fr.photo} width='30' height='30' /></span>
                        <span className='frname'>
                            <a href={fr.url}>{fr.name}</a>
                        </span>
                    </li>
                </ul>
			))}
        </div>
    </section>
    <br /><br />
    <section id="sect3">
        <p>위치</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3163.100452954271!2d126.94781206548213!3d37.55269703047339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sko!2skr!4v1722414251352!5m2!1sko!2skr" width="600" height="450" loading="lazy"></iframe>
    </section>
    <footer>
        <p>© 2024. <a href="#">stones</a> All rights reserved.</p>
    </footer>
</div>
  );
}

export default App;
