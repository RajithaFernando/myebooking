import { Modal, Button, Space } from 'antd';

export function info(title, message1, message2) {
    Modal.info({
        title: title,
        content: (
            <div>
                <p>{message1}</p>
                <p>{message2}</p>
            </div>
        ),
        onOk() { },
    });
}

export function success(title, message) {
    Modal.success({
        content: message,
    });
}

export function error(title, message) {
    Modal.error({
        title: title,
        content: message,
    });
}

export function warning(title, message) {
    Modal.warning({
        title: title,
        content: message,
    });
}