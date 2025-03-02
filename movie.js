function showMovieDetail(movieId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('reserve').style.display = 'block';

    const movieData = {
        코난: {
            title: "명탐정 코난 : 흑철의 어영",
            poster: "./image/명탐정코난_흑철의어영.jpeg",
            rating: "15세 이상 관람가",
            director: "야마모토 야스이치로",
            description: "인터폴의 최첨단 정보 해양 시설인 ‘퍼시픽 부이’. 일본과 유럽의 CCTV 정보를 확인할 수 있을 뿐 아니라, 장기 수배범이나 유괴당한 피해자를 전 세계에서 찾아낼 수 있는 ‘전연령 인식’이라는 획기적인 AI 기술을 개발 중이다. 그러던 중 독일에서 검은 조직에 의해 유로폴 직원이 살해되는 사건이 발생하고 뒤를 이어 ‘전연령 인식’의 핵심 기술자가 납치된다. 나이와 상관없이 안면 인식이 가능한 기술이 검은 조직의 손에 들어가면 독약 APTX4869(아포톡신 4869) 개발 후 사망한 것으로 알려진 코드명 ‘셰리’이자 하이바라 아이도 위험하게 되는데! 코난, FBI, CIA, 공안 경찰이 합세, 하이바라 아이와 함께 전 세계를 위험에 빠지게 할 절체절명의 오션 배틀 로열이 시작된다!"
        },
        기생충: {
            title: "기생충",
            poster: "./image/기생충.jpeg",
            rating: "15세 이상 관람가",
            director: "봉준호",
            description: "전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…"
        },
        토토로: {
            title: "이웃집 토토로",
            poster: "./image/이웃집토토로.jpeg",
            rating: "전체관람가",
            director: "미야자키 하야오",
            description: "도시를 떠나 시골로 이사 온 ‘사츠키’와 ‘메이’는 우연히 숲속에 살고 있는 신비로운 생명체 ‘토토로’를 만나 신비한 모험을 함께 한다. 그러던 어느 날, 어머니의 병원에서 위태로운 소식이 도착하고 언니 ‘사츠키’가 정신없이 아빠에게 연락을 취하는 와중에 ‘메이’가 행방불명 되는데…"
        },
        포레스트검프: {
            title: "포레스트 검프",
            poster: "./image/포레스트검프.jpeg",
            rating: "12세 이상 관람가",
            director: "로버트 저메키스",
            description: "불편한 다리, 남들보다 조금 떨어지는 지능을 가진 외톨이 소년 ‘포레스트 검프’ 헌신적이고 강인한 어머니의 보살핌과 콩깍지 첫사랑 소녀 ‘제니’와의 만남으로 사회의 편견과 괴롭힘 속에서도 따뜻하고 순수한 마음을 지니고 성장한다. 여느 날과 같이 또래들의 괴롭힘을 피해 도망치던 포레스트는 누구보다 빠르게 달릴 수 있는 자신의 재능을 깨닫고 늘 달리는 삶을 살아간다. 포레스트의 재능을 발견한 대학에서 그를 미식축구 선수로 발탁하고, 졸업 후에도 뛰어난 신체능력으로 군에 들어가 누구도 예상치 못한 성과를 거둬 무공훈장을 수여받는 등 탄탄한 인생 가도에 오르게 된 포레스트. 하지만 영원히 행복할 것만 같았던 시간도 잠시, 어머니가 병에 걸려 죽음을 맞이하고 첫사랑 제니 역시 그의 곁을 떠나가며 다시 한번 인생의 전환점을 맞이하게 되는데… 과연, 포레스트는 진정한 삶의 행복을 발견할 수 있을까? 진정한 삶의 가치와 의미를 제시하는 감동 바이블! 올 가을, 다시 한번 세상에서 가장 눈부신 달리기가 시작된다! “Run! Forrest Run!”"
        },
        스즈메: {
            title: "스즈메의 문단속",
            poster: "./image/스즈메의문단속.jpeg",
            rating: "12세 이상 관람가",
            director: "신카이 마코토",
            description: "한 소녀가 우연히 만난 청년과 재난의 문을 닫는 모험에 뛰어들게 되는 이야기를 다룬 애니메이션 영화"
        },
        인사이드아웃: {
            title: "인사이드 아웃 2",
            poster: "./image/인사이드아웃2.jpeg",
            rating: "전체관람가",
            director: "켈시 맨",
            description: "디즈니·픽사의 대표작 <인사이드 아웃> 새로운 감정과 함께 돌아오다! 13살이 된 라일리의 행복을 위해 매일 바쁘게 머릿속 감정 컨트롤 본부를 운영하는 ‘기쁨’, ‘슬픔’, ‘버럭’, ‘까칠’, ‘소심’. 그러던 어느 날, 낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고, 언제나 최악의 상황을 대비하며 제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다. 결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은 다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데… 2024년, 전 세계를 공감으로 물들인 유쾌한 상상이 다시 시작된다!"
        },
        범죄도시: {
            title: "범죄도시 4",
            poster: "./image/범죄도시4.jpeg",
            rating: "15세 이상 관람가",
            director: "허명행",
            description: "신종 마약 사건 3년 뒤, 괴물형사 ‘마석도’(마동석)와 서울 광수대는 배달앱을 이용한 마약 판매 사건을 수사하던 중 수배 중인 앱 개발자가 필리핀에서 사망한 사건이 대규모 온라인 불법 도박 조직과 연관되어 있음을 알아낸다. 필리핀에 거점을 두고 납치, 감금, 폭행, 살인 등으로 대한민국 온라인 불법 도박 시장을 장악한 특수부대 용병 출신의 빌런 ‘백창기’(김무열)와 한국에서 더 큰 판을 짜고 있는 IT업계 천재 CEO ‘장동철’(이동휘). ‘마석도’는 더 커진 판을 잡기 위해 ‘장이수’(박지환)에게 뜻밖의 협력을 제안하고 광역수사대는 물론, 사이버수사대까지 합류해 범죄를 소탕하기 시작하는데… 나쁜 놈 잡는데 국경도 영역도 제한 없다! 업그레이드 소탕 작전! 거침없이 싹 쓸어버린다!"
        },
        센과치히로: {
            title: "센과 치히로의 행방불명",
            poster: "./image/센과치히로의행방불명.jpeg",
            rating: "전체관람가",
            director: "미야자키 하야오",
            description: "금지된 세계의 문이 열렸다! 이사 가던 날, 수상한 터널을 지나자 인간에게는 금지된 신들의 세계로 오게 된 치히로.. 신들의 음식을 먹은 치히로의 부모님은 돼지로 변해버린다. “걱정마, 내가 꼭 구해줄게…” 겁에 질린 치히로에게 다가온 정체불명의 소년 하쿠. 그의 따뜻한 말에 힘을 얻은 치히로는 인간 세계로 돌아가기 위해 사상 초유의 미션을 시작하는데…"
        },
        퓨리오사: {
            title: "퓨리오사 : 매드맥스 사가",
            poster: "./image/퓨리오사.jpeg",
            rating: "15세 이상 관람가",
            director: "조지밀러",
            description: "문명 붕괴 45년 후, 황폐해진 세상 속 누구에게도 알려지지 않은 풍요가 가득한 ‘녹색의 땅’에서 자란 ‘퓨리오사’(안야 테일러-조이)는 바이커 군단의 폭군 ‘디멘투스’(크리스 헴스워스)의 손에 모든 것을 잃고 만다. 가족도 행복도 모두 빼앗기고 세상에 홀로 내던져진 ‘퓨리오사’는 반드시 고향으로 돌아가겠다는 어머니와의 약속을 지키기 위해 인생 전부를 건 복수를 시작하는데... ‘매드맥스’ 시리즈의 전설적인 사령관 ‘퓨리오사’의 대서사시 마침내 분노가 깨어난다!"
        }
    };

    const selectedMovie = movieData[movieId];

    if (selectedMovie) {
        // 영화 제목, 포스터, 설명 업데이트
        document.getElementById('movie-title').textContent = selectedMovie.title;
        document.getElementById('movie-poster').src = selectedMovie.poster;
        document.getElementById('movie-description').textContent = selectedMovie.description;
        document.getElementById('movie-director').textContent = `감독: ${selectedMovie.director}`;
        document.getElementById('movie-rating').textContent = `관람 등급: ${selectedMovie.rating}`;

        // 초기화
        document.getElementById('movie-details').style.display = 'block';
        document.getElementById('time-selection').style.display = 'none';
    }
}

function goBackToHome() {
    document.getElementById('reserve').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reserve').style.display = 'none';

    document.getElementById('book-now').addEventListener('click', () => {
        document.getElementById('movie-details').style.display = 'none';
        document.getElementById('time-selection').style.display = 'block';
    });

    document.getElementById('confirm-booking').addEventListener('click', () => {
        alert('예매가 완료되었습니다!');
        goBackToHome();
    });

    document.getElementById('go-back').addEventListener('click', goBackToHome);
});
