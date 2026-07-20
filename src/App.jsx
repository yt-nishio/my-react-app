import { useState } from 'react';

function App() {
  // タスクのリストを管理するState
  const [todos, setTodos] = useState([]);
  // 入力フォームの文字を管理するState
  const [inputText, setInputText] = useState('');

  // 追加ボタンを押した時の処理
  const handleAddTodo = () => {
    if (inputText.trim() === '') return; // 空白なら何もしない
    setTodos([...todos, inputText]);    // 今のリストに新しいタスクを追加
    setInputText('');                   // 入力欄を空にする
  };

  // 削除ボタンを押した時の処理
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Minimal Tasks</h1>
      
      <div style={styles.inputArea}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="新しいタスクを入力..."
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.button}>追加</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)} style={styles.deleteButton}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 簡易的なミニマルデザインのスタイル
const styles = {
  container: { maxWidth: '400px', margin: '60px auto', padding: '20px', fontFamily: 'sans-serif' },
  title: { fontSize: '24px', fontWeight: '300', textAlign: 'center', marginBottom: '30px', color: '#333' },
  inputArea: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' },
  button: { padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 10px', borderBottom: '1px solid #eee' },
  deleteButton: { background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '16px' }
};

export default App;