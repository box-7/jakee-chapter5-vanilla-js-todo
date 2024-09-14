import './style.css';

// 関数の設定
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
  // li生成
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';

  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todo;

  // button(完了)タグ生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    const moveTarget = completeButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest('li').remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    console.log('moveTarget', moveTarget);
    const test = document.getElementById('complete-list');
    console.log('test', test);
    document.getElementById('complete-list').appendChild(moveTarget);
    // document.getElementById('complete-list').appendChild(moveTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
    console.log(deleteTarget);
  });

  // liタグの子要素に書く要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById('incomplete-list').appendChild(li);
  // console.log(li);
};

// イベントの設定
document.getElementById('add-button').addEventListener('click', onClickAdd);
