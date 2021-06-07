const path = require('path');

// Webpack을 실행할 땐 필수적인 3가지 옵션이 있다.
module.exports = {
    // mode는 개발환경이냐 운영환경이냐에 따라서 각각 맞춰서 설정 development는 개발용정보를 추가 production는 운영에 배포하기 위한 최적화 설정을 하기 위함
    mode: 'development',
    // entry는 자바스크립트 모듈이 여러 개 의존관계가 있는데 그 의존관계 모듈 중 첫 번째 시작점을 의미
    entry: {
        main: './src/app.js'
    },
    // output은 웹팩이 시작점을 기준으로 모든 모듈들을 찾아서 하나의 파일로 번들링 해주는데 그 번들링 결과를 output에 설정하는 방식
    // output에 설정한 [name]은 entry에 추가한 main이 문자열로 들어오는 방식이다.
    // output.path는 절대경로를 사용하기 때문에 path 모듈의 resolve() 함수를 사용해서 계산했다.
    // path는 노드 코어 모듈 중 하나로 경로를 처리하는 기능을 제공한다.
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },    
    // 로더는 모듈객체 안에 rules란 배열에다가 추가할 수 있음
    module: {
        rules: [
            {
                // test는 로더가 처리해야 할 파일들의 패턴을 입력
                // .js로 끝나는 녀석들을 모두 로더로 돌리겠다.
                test: /\.js$/,
                use: [
                    path.resolve('./my-webpack-loader.js')
                ]
            }// 이렇게 하면 모든 자바스크립트 코드에 대해서 방금 만들었던 마이웹팩로더가 실행되게끔 하는 설정
        ]
    }
}