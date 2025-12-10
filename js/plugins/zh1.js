// source/js/plugins/customAlert.js

/**
 * 动态注入样式（避免重复添加）
 */
function injectStyles() {
    if (document.querySelector('#custom-alert-styles')) return;

    const style = document.createElement('style');
    style.id = 'custom-alert-styles';
    style.textContent = `
      /* 弹窗容器（居中上方） */
      .custom-alert {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        min-width: 300px;
        max-width: 80%;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background: #fff;
        border: 1px solid #ebeef5;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        animation: fadeIn 0.3s ease-out forwards;
      }
  
      /* 消失动画 */
      .custom-alert.hide {
        animation: fadeOut 0.3s ease-in forwards;
      }
  
      /* 类型颜色 */
      .custom-alert-error {
        background: #fff1f0;
        border-color: #ffccc7;
        color: #ff4d4f;
      }
      .custom-alert-success {
        background: #f6ffed;
        border-color: #b7eb8f;
        color: #52c41a;
      }
      .custom-alert-warning {
        background: #fffbe6;
        border-color: #ffe58f;
        color: #faad14;
      }
      .custom-alert-info {
        background: #e6f7ff;
        border-color: #91d5ff;
        color: #1890ff;
      }
  
      /* 消息文本 */
      .custom-alert-message {
        font-size: 14px;
        line-height: 1.5;
        text-align: center;
      }
  
      /* 动画定义 */
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translate(-50%, -20px);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
  
      @keyframes fadeOut {
        from {
          opacity: 1;
          transform: translate(-50%, 0);
        }
        to {
          opacity: 0;
          transform: translate(-50%, -20px);
        }
      }
    `;
    document.head.appendChild(style);
}

/**
 * 显示自定义弹窗（带动画）
 * @param {string} message - 提示内容
 * @param {string} type - 类型（error/success/warning/info）
 */
export function showCustomAlert(message, type = 'error') {
    injectStyles(); // 确保样式已加载

    // 移除旧弹窗
    const oldAlert = document.querySelector('.custom-alert');
    if (oldAlert) {
        oldAlert.classList.add('hide');
        setTimeout(() => oldAlert.remove(), 300); // 等待消失动画完成
    }

    // 创建新弹窗
    const alertEl = document.createElement('div');
    alertEl.className = `custom-alert custom-alert-${type}`;
    alertEl.innerHTML = `
      <span class="custom-alert-message">${message}</span>
    `;

    document.body.appendChild(alertEl);

    // 3秒后触发消失动画
    setTimeout(() => {
        alertEl.classList.add('hide');
        setTimeout(() => alertEl.remove(), 300); // 动画结束后移除DOM
    }, 3000);
}
