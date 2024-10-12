// src/background/background.ts

// Функция, вызываемая при установке расширения
chrome.runtime.onInstalled.addListener((): void => {
    console.log('Extension installed');
  });
  
  // Определение типа сообщения для строгой типизации
  interface GreetingMessage {
    type: 'GREETING';
  }
  
  interface GreetingResponse {
    message: string;
  }
  
  // Обработчик сообщений от content скриптов или popup
  chrome.runtime.onMessage.addListener(
    (
      request: GreetingMessage,
      _sender: chrome.runtime.MessageSender,
      sendResponse: (response: GreetingResponse) => void
    ): boolean | void => {
      if (request.type === 'GREETING') {
        sendResponse({ message: 'Hello from background script!' });
      }
      // Возвращаем false, если ответ не будет отправлен асинхронно
      return false;
    }
  );
  