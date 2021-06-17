'use strict';

// {
//   ①const score1 = 80;
//   const score2 = 90;
//   const score3 = 40;
//   ②const scores = [80, 90, 40];
//   console.log(scores);
// }
//   #1、配列
//   ①のようにそれぞれ指定しても良い
//   ②のように配列のデータ構造で同じ名前でもできる
//   __proto__は気にしなくて良い





//  {
//    const scores = [80, 90, 40];
//    console.log(scores[1]);
//    scores[2] = 44;
//    console.log(scores);
//    console.log(scores.length);
//  } 
//  #2、配列の要素
//  80は0番目、90は1番目、40は2番目





// {
//   const scores = [80, 90, 40, 70];
//   ①console.log(`Score: ${scores[0]}`)
//   console.log(`Score: ${scores[1]}`)
//   console.log(`Score: ${scores[2]}`)
//   ②for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }
// #3、配列とループ処理
// ②の方が応用が効いたり短いコードで良い
// scores.lengthとすることでscoresの要素の数だけconsole.logを表示する






// {
//   const scores = [80, 90, 40, 70];
//   scores.push(60,50);
//   scores.shift();
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }
// #4、配列の要素の変更
// 配列の先頭に要素を追加は unshift()
// 末尾に要素を追加は push()
// 要素を先頭から削除していくには shift()
// 要素を末尾から削除するには pop()






// {
//   const scores = [80, 90, 40, 70];
//   scores.splice(1, 1, 40, 50);
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }
// #5、spliceで配列を変更
// splice(変化が開始する位置, 削除数, 追加する要素, ・・・)
// 変化が開始する位置とは上の例で言うと1なので90にあたる
// 削除数は1なので90が削除される
// その後の追加する要素は 40,50 となっているので40と50が末尾に追加される




// {
//   ①const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   console.log(scores);
//   ②function sum(a, b) {
//     console.log(a + b);
//   }
//   sum(...otherScores);
// }
// #6、スプレット構文
// ①二つの配列を組み合わせるとき、配列の中に配列の名前を書いてしまうと配列の中に配列ができてしまうので配列名の前に ... をつける、こうすれば配列の中で配列が展開される
// ②また、関数の引数にも使われ、sum(...otherScores)はsum(10, 20)と同じ




// {
//   const scores = [80, 90, 40, 70];
//   ①const [a, b, c, d] = scores;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   ②const [a, b, ...others] = scores;
//   console.log(a);
//   console.log(b);
//   console.log(others);
//   ③let x = 30;
//   let y = 70;
//   [x, y] = [y, x];
//   console.log(x);
//   console.log(y);
// }
// #7、分割代入、レスト構文
// ①a,b,c,dにscoresを代入できる
// ②この...はレスト構文といい、割り当てた以外の要素をここで指定した名前の配列に格納できる
// ③xとyの変数を入れ替えることができる





// {
//   const scores = [80, 90, 40, 70];
//   ①scores.forEach((score) => {
//    ② scores.forEach((score, index) => {
  //    固定 console.log(`Score ${index}: ${score}`)
  // })
//   })
// }
// #8、forEach()の使い方
// forEachで渡す関数の引数は渡す順番で認識される
// この関数に引数を設定しておくことで配列の要素をその名前で一つずつ受け取りこのブッロク内で使える
// ①score（一つ目の引数）というのはscoresの要素が順番にscoreに要素がなくなるまで代入される
// ②index（二つ目の引数）はscoreがscoresのなかで何番目かという情報を受け取る





// {
//   const prices = [180, 190, 200];
  // ①const updatedPrices = prices.map((price) => {
  //   return price + 20;
  // });
//   ②const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }
// #9、map()関数
// 配列に何らかの処理を行いその結果を別の配列として取得したいときに使う
// ②は①の短縮形
// pricesの各要素をpriceで受け取りそこに20を足した上で新しい要素を作ってupdatedpricesで返す





// {
//   const numbers = [1, 4, 7, 8, 10];
//   ①const evenNumbers = numbers.filter(number => {
//     if (number % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   ②const evenNumbers = numbers.filter(number => number % 2 === 0);
//   console.log(evenNumbers);
// }
// #10、filter()を使う
// filter()は条件に合うものだけを抽出して別の配列として取得することができる(今回は偶数だけを抽出)
// ①抽出して要素を受け取るためにevenNumbersとしいう定数を作り
// numbersに対してfilter()としてあげて、numbersの各要素はnumberで受け取る
// numberがある条件に合致するときはtrue、しない時はfalesという値を返す
// filter()は特殊な命令で、trueの値が抽出される
// ②この条件式がtrueだったらtrue、falseだったらfalseを返すのでこの条件式自体をreturnするようにした




// {
//   ①const point = [100, 180];
//   ②const point = {x: 100, y: 180};
//   console.log(point);
// }
// #11、オブジェクトを作ってみよう
// 点の座標を管理したかった場合に {x: 100, y: 180} このようにして名前をつけてオブジェクトを管理できる
// 用語、
// x: 100　プロパティ（メンバー）
// x　名前（キー）
// 100　値



// {
//   const point = {
//     x: 100,
//     y: 180,
//   };
//   ①point.x = 120;
//   ②point['x'] = 120;

//   console.log(point.x);
//   console.log(point['y']);

//   point.z = 90;
//   delete point.y;
//   console.log(point);
// }
// #12、プロパティの操作
// オブジェクトのプロパティにアクセスする方法
// ①「オブジェクト名.キーの名前」
// ②オブジェクト名のあとで[]のなかにキーの文字列
// また、オブジェクトにz座標を追加したい場合は point.z = 90; このようにしてあげれば良い
// y座標を削除したい場合はdeleteというキーワードを使い、delete point.y; としてあげれば良い






// {
// const otherProps = {
//   r: 4,
//   color: 'red'
// };
// ①const point = {
//   x: 100,
//   y: 180,
//   ...otherProps,
// };
// console.log(point);

// ②const {x, r, ...others} = point;
// console.log(x);
// console.log(r);
// console.log(others);
// }
// #13、オブジェクト操作
// ①スプレッド構文はオブジェクトを展開するためにも使える
// otherPropsというオブジェクトのプロパティをそのままpointに追加
// ②分割代入とレスト構文もオブジェクトに対して使える
// xとrを定数として代入したい場合は分割代入で{}のなかにpointを代入するのですが、オブジェクトと同じ定数名を使えばそのキーの値が代入される
// 残りは、レスト構文を使う





// {
//   ①const point = {
//     x: 100,
//     y: 180,
//   };
//   const keys = Object.keys(point);
//   keys.forEach(key => {
//     console.log(`Key: ${key} Value: ${point[key]}`);
//   });
//   ②const points = [
//     {x:30, y:20},
//     {x:10, y:50},
//     {x:40, y:40},
//   ];
//   console.log(points[1].y);
// }
// #14、Object.keys()、forEach()を使う
// ①オブジェクトではforEach()は使えないのでObject.keys()を使って使えるようにする
// Object.keys(point)とするとpointの全てのキーを配列で得られ、それをkeysという定数に入れる
// これによってキーが配列で得られるのでforEach()が使えるようになる
// それぞれの要素をkeyで受け取り表示
// また、このキーに対する値を表示するためには、今は文字列で取得されているので、point[]で中に文字列入れてあげることで値をえられる
// ②複数の座標を管理する場合
// ２列目のy(50)を取り出したかった場合は、point[1].y としてあげれば良い




// {
//   ①let x = [1, 2];
//   let y = x;
//   x[0] = 5;
//   console.log(x); // [5, 2]
//   console.log(y); // [5, 2]
  
//   ②let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x); // [5, 2]
//   console.log(y); // [1, 2]
// }
// #15,16、変数の挙動
// １、データ型の場合はx＝１とするとコンピューター上のどこかに１という値が格納されそこにxという名前がつき、y=xとするとxの値である1がどこか別のところにコピーされそこにyという名前がつくイメージ
// ２、複雑なデータ形（配列）の場合はx=[1, 2]とするとどこかに[1, 2]という値が格納されそこにxという名前がつき、y=xとするとxに割り当てられた値ではなくxの値がどこかに格納されているかという情報だけが与えられるので、元々あるxの配列にyという名前もつくイメージ
// ①配列のxをyに代入する場合
// ２よりx[0] = 5とするとxもyも両方の値が変わってしまう
// ②スプレッド演算子を使う
// [...x]としてあげることでxの値が展開されyにはxのある場所ではなく[1, 2]という値そのものが代入される






// {
// const str = 'hello';
// ①console.log(str.length);
// ②str.substring(開始位置、終了位置);
// console.log(str.substring(2,5));
// ③console.log(str[1]);
// ④str[1] = 'a';
// }
// #17、文字列を操作
// ①定数名.length で文字数がわかる
// ②定数名.substring(開始位置、終了位置);とすることで開始位置から終了位置までの文字が表示される、この場合は llo となる
// ③console.log(str[1]);とすることで１番目の文字（e）にアクセスできる
// ④このように１番目の文字を変えたり、設定することはできない