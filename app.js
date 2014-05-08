
/**
 * Module dependencies.
 */

//var 변수명 = require('')는 ''안에 필요한 
//모듈 이름이나 위치를 써서 모듈을 import하는 것 같다.
//왜 어떤거는 경로를 쓰고 어떤건 모듈명만 쓰는건지?
//생성한 변수 명에다가 모듈을 할당한다.
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

//express 모듈을 express 변수에 할당한 후,
//express변수를 app이라는 변수로 객체화한다.
var app = express();

//configure는 대체로 설정 관련인것 같다.
//app변수(express모듈)의 set/use 메소드/함수를 사용해서 설정한다. 
app.configure(function(){
  app.set('port', process.env.PORT || 3000); //사용할 포트를 설정한다.
  app.set('views', __dirname + '/views'); // 현재 디렉토리(__dirname) 안에 /views라는 폴더를 views 역할로 설정한다.  
  app.set('view engine', 'jade'); //view engine은 jade를 사용한다고 설정해서 알려준다.
  app.use(express.favicon()); //파비콘에는 빈 값이 들어가 있는데 이미지 경로를 넣으면 되는건가? 
  app.use(express.logger('dev')); //?
  app.use(express.bodyParser()); //?
  app.use(express.methodOverride()); //?
  app.use(app.router); //? 모르겠는데 메소드를 use를 사용한것을 보아서 express모듈 안에 
  //favicon/logger/bodyParser등의 메소드를 사용하겠다는 얘기인것 같다. 근데 왜 express를 app으로 만들었는데 ()안에 대입은 express를 하고있지?
  app.use(express.static(path.join(__dirname, 'public'))); //static으로 항상 public폴더안의 파일을 메모리에 상주시킨다는 이야기인가?
});

app.configure('development', function(){
  app.use(express.errorHandler());
}); // express 모듈 안에 configure메소드 안에 development라는 메소드를 불러오고 그 안에 errorHandler()라는 메소드를 사용한다?

app.get('/', routes.index); //현재 디렉토리안에 routes안에 index파일을 실행한다.
app.get('/users', user.list); //users 디렉토리 안에 user안에 list파일을 실행한다. 근데 users디렉토리도 없고 list도 없어서 지워도 될거같다.

http.createServer(app).listen(app.get('port'), function(){ //서버를 생성하고 app에서 설정한 port값을 가져온다.
  console.log("Express server listening on port " + app.get('port')); //그래서 콘솔에 node app를 실행하면 서버가 실행되면서 이게 출력된다.
});
