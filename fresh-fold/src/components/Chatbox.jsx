import { useState } from "react";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const userMessage = { name: "User", message: userInput };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const botMessage = { name: "Sam", message: data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setUserInput(""); // Clear the input field
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* Button to toggle chatbox */}
      <button
        className="fixed bottom-5 right-5 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg"
        onClick={toggleChatbox}
      >
        Chat with us!
      </button>

      {/* Chatbox Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    msg.name === "Sam" ? "bg-gray-100" : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center p-2 bg-gray-100 border-t">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyUp={handleKeyUp}
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
