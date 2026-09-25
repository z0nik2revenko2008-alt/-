from PyQt5.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QLineEdit, QPushButton, QWidget, QGridLayout

class Calculator(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Калькулятор")
        self.setFixedSize(300, 400)
        
        # Главный виджет и layout
        self.main_widget = QWidget()
        self.main_layout = QVBoxLayout()
        self.main_widget.setLayout(self.main_layout)
        self.setCentralWidget(self.main_widget)
        
        # Поле ввода
        self.display = QLineEdit()
        self.display.setReadOnly(True)
        self.display.setStyleSheet("font-size: 24px;")
        self.main_layout.addWidget(self.display)
        
        # Кнопки
        self.buttons_layout = QGridLayout()
        self.main_layout.addLayout(self.buttons_layout)
        
        # Названия кнопок
        buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+',
            'C'
        ]
        
        # Создаем кнопки и добавляем их на layout
        positions = [(i, j) for i in range(5) for j in range(4)]
        for position, button_text in zip(positions, buttons):
            if button_text == '':
                continue
            button = QPushButton(button_text)
            button.setStyleSheet("font-size: 18px;")
            button.clicked.connect(self.on_button_click)
            self.buttons_layout.addWidget(button, *position)
    
    def on_button_click(self):
        sender = self.sender()
        text = sender.text()
        
        if text == 'C':
            self.display.clear()
        elif text == '=':
            try:
                result = eval(self.display.text())
                self.display.setText(str(result))
            except:
                self.display.setText("Ошибка")
        else:
            self.display.setText(self.display.text() + text)

if __name__ == "__main__":
    app = QApplication([])
    calculator = Calculator()
    calculator.show()
    app.exec_()