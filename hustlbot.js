// ================= HUSTLBOT GLOBAL WIDGET =================
(function () {
    const botHTML = `
    <style>
      :root {
        --h-neon: #ccff00;
        --h-bg: #0a0a0a;
        --h-card: #141414;
        --h-text: #ffffff;
        --h-dim: #888888;
        --h-border: rgba(255,255,255,0.1);
      }
  
      #hustl-bubble {
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 60px;
        height: 60px;
        background: var(--h-neon);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 99999;
        box-shadow: 0 0 25px rgba(204,255,0,0.4);
      }
  
      #hustl-panel {
        position: fixed;
        bottom: 100px;
        right: 25px;
        width: 360px;
        height: 520px;
        background: var(--h-bg);
        border: 1px solid var(--h-border);
        border-radius: 22px;
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 100000;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
  
      .hp-header {
        padding: 16px;
        background: var(--h-card);
        border-bottom: 1px solid var(--h-border);
        display: flex;
        align-items: center;
        gap: 10px;
      }
  
      .hp-avatar {
        width: 32px;
        height: 32px;
        background: var(--h-neon);
        border-radius: 50%;
        color: #000;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
  
      #hp-chat {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
  
      .h-msg {
        max-width: 80%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 13px;
      }
  
      .h-msg-bot {
        background: var(--h-card);
        color: var(--h-text);
        align-self: flex-start;
      }
  
      .h-msg-user {
        background: var(--h-neon);
        color: #000;
        align-self: flex-end;
        font-weight: 600;
      }
  
      .hp-input {
        display: flex;
        padding: 12px;
        border-top: 1px solid var(--h-border);
        background: var(--h-card);
      }
  
      .hp-input input {
        flex: 1;
        background: transparent;
        border: none;
        color: white;
        outline: none;
      }
  
      .hp-input button {
        background: none;
        border: none;
        color: var(--h-neon);
        font-weight: 800;
        cursor: pointer;
      }
  
      @media(max-width:480px){
        #hustl-panel{
          right:0;
          bottom:0;
          width:100vw;
          height:100vh;
          border-radius:0;
        }
      }
    </style>
  
    <div id="hustl-panel">
      <div class="hp-header">
        <div class="hp-avatar">HB</div>
        <div>
          <div style="font-weight:800">HustlBot</div>
          <div style="font-size:11px;color:var(--h-neon)">AI Mentor</div>
        </div>
        <div id="hb-close" style="margin-left:auto;cursor:pointer">✕</div>
      </div>
  
      <div id="hp-chat"></div>
  
      <div class="hp-input">
        <input id="hp-input" placeholder="Ask about earning, AI, course..." />
        <button id="hp-send">Send</button>
      </div>
    </div>
  
    <div id="hustl-bubble">💬</div>
    `;
  
    document.body.insertAdjacentHTML("beforeend", botHTML);
  
    const bubble = document.getElementById("hustl-bubble");
    const panel = document.getElementById("hustl-panel");
    const closeBtn = document.getElementById("hb-close");
    const chat = document.getElementById("hp-chat");
    const input = document.getElementById("hp-input");
    const send = document.getElementById("hp-send");
  
    function addMsg(text, type) {
      const div = document.createElement("div");
      div.className = "h-msg h-msg-" + type;
      div.innerText = text;
      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;
    }
  
    function botReply(msg) {
      const m = msg.toLowerCase();
      if (m.includes("earn") || m.includes("money"))
        return "Start with Course 1. Do today’s task. Sell AI resumes, bios, captions. First ₹500 comes fast.";
      if (m.includes("confused"))
        return "Normal. Just complete the 'Do This Now' box. Momentum fixes confusion.";
      if (m.includes("not working") || m.includes("error"))
        return "Refresh once. If still broken, you’re probably missing a file link.";
      return "Ask me about today’s task, earning path, or AI prompts.";
    }
  
    bubble.onclick = () => panel.style.display = "flex";
    closeBtn.onclick = () => panel.style.display = "none";
  
    send.onclick = () => {
      if (!input.value) return;
      addMsg(input.value, "user");
      const reply = botReply(input.value);
      input.value = "";
      setTimeout(() => addMsg(reply, "bot"), 500);
    };
  
    addMsg("Yo 👋 I’m HustlBot. Ask me how to earn with AI.", "bot");
  })();
  