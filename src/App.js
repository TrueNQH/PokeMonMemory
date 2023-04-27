import { useState } from "react";
import Cards from './components/Cards'

function App() {
  const [modalVisible, setModalVisible] = useState(true)

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="App">
      <div className="App__header">
        <h1>PokeMon Memory Game</h1>
        <div className="">
          <div className="time-score">
            <p>Time record: </p>
            <p>0</p>
          </div>
          <div className="time-score">
            <p>Time play: </p>
            <p>0</p>
          </div>
        </div>

        <button onClick={showModal}>Start </button>
      </div>

      <Cards/>

      <div className={`modal ${modalVisible ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={hideModal}>
            &times;
          </span>
          <h2>Xin chào!</h2>
          <p>Pokemon Memory là một trò chơi giải đố giúp tập trung và cải thiện trí nhớ của người chơi. Trong trò chơi này, người chơi cần tìm ra các cặp hình ảnh Pokemon giống nhau trong một tập hợp các thẻ được đặt ngẫu nhiên. Trò chơi còn có đồ họa Pokemon đầy màu sắc và hấp dẫn, mang đến cho người chơi những trải nghiệm thú vị.</p>
          <button onClick={hideModal}>Bắt đầu</button>
        </div>
       
      </div>
    </div>
  );
}

export default App;
