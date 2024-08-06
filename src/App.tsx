import React from 'react';
import './App.css';
import frd from "./data/friend.json";
import FrdCom from "./FrdCom";

function App() {
  return (
    <div className="container">
    <header>
        <p>Cover Title</p>
        <ul>
            <li><a href="#">Home1</a></li>
            <li><a href="#sect2">Home2</a></li>
            <li><a href="#sect3">Home3</a></li>
        </ul>
    </header>
    <section id="sect1">
        <p>넓고 푸른 바다</p>
        <p>아름다운 세상</p>
        <img src={process.env.PUBLIC_URL + '/img/ferrari.jpg'} className="proPhoto" alt="Person" />
        <div>
            {frd.myprofile.map(my => (
                <ul>
                    <li>{my.name} : {my.value}</li>
                </ul>
            ))}
        </div>
        <p>Title Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <p>타입스크립트(TypeScript)는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어이다. 마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원한다. C#의 리드 아키텍트이자 델파이, 터보 파스칼의 창시자인 Anders Hejlsberg가 개발에 참여한다.[4] 클라이언트 사이드와 서버 사이드를 위한 개발에 사용할 수 있다.
타입스크립트는 자바스크립트 엔진을 사용하면서 커다란 애플리케이션을 개발할 수 있게 설계된 언어이다.[5] 자바스크립트의 슈퍼셋이기 때문에 자바스크립트로 작성된 프로그램이 타입스크립트 프로그램으로도 동작한다.
타입스크립트에서 자신이 원하는 타입을 정의하고 프로그래밍을 하면 자바스크립트로 컴파일되어 실행할 수 있다.
타입스크립트는 모든 운영 체제, 모든 브라우저, 모든 호스트에서 사용 가능한 오픈 소스이다.</p>
        <a href="https://www.youtube.com/watch?v=LZ5M-e5z01c">Learn more</a>
    </section>
    <br /><br />
    <section id="sect2">
        <p>Section 2 친구들</p>
        <FrdCom />
        <div>
			{frd.friends.map(fr => (
				//<a href="#" key={fr.id}>안녕하세요. {fr.name}({fr.url}) 입니다.</a>
                <ul>
                    <li>
                        <span className='frphoto'><img src={process.env.PUBLIC_URL + fr.photo} width='30' height='30' /></span>
                        <span className='frname'>{fr.name}({fr.url})</span>
                    </li>
                </ul>
			))}
        </div>
    </section>
    <br /><br />
    <section id="sect3">
        <p>Section 3 Location</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3163.100452954271!2d126.94781206548213!3d37.55269703047339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sko!2skr!4v1722414251352!5m2!1sko!2skr" width="600" height="450" loading="lazy"></iframe>
    </section>
    <footer>
        <p>© 2024. <a href="#">stones</a> All rights reserved.</p>
    </footer>
</div>
  );
}

export default App;
