import logo from './logo.svg';
import './App.css';
import Form  from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSumbit = data=>{
    console.log(data);
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className='wrapper'>
            <Form onSubmit={handleSubmit(onSumbit)} className="form_reg">
            <h1 className="title_form mb-4">Реєстрація</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='App-label'>Ім'я *</Form.Label>
              <Form.Control type="text" placeholder="" {...register("name", {required: true,
                    pattern: /^[A-ZА-ЯІ][a-zа-яі]{1,}$/u})} />
              <Form.Text className="text-muted" >
              Ім'я має містити мінімум дві літери, з першою великою і рештою малих літер.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label className='App-label'>Прізвище *</Form.Label>
              <Form.Control type="text" placeholder="" {...register("surName", {required: true,
                    pattern: /^[A-ZА-ЯІ][a-zа-яі]{1,}$/u})}/>
              <Form.Text className="text-muted" >
              Прізвище має містити мінімум дві літери, з першою великою і рештою малих літер.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='App-label'>Пошта *</Form.Label>
              <Form.Control type="email" placeholder="Email@email.ua" {...register("email", {required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i})} />
              <Form.Text className="text-muted" >
              
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='App-label'>Номер телефону</Form.Label>
              <Form.Control type="text" id="phone" placeholder="+380 (необов'язково)" {...register("phone", {pattern: /^$|^\+380\d{9}$/})}/>
              {errors.phone && (
                  <Form.Text className="text-danger">
                    Будь ласка, введіть номер телефону у форматі +380 і 9 цифр вашого телефону.
                  </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='App-label'>Пароль *</Form.Label>
              <Form.Control type={showPassword ? "text" : "password"} id="password" placeholder="Пароль має містити не менше 6 символів, 1 велику літеру, 1 цифру." {...register("password", {required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/})} />
              {errors.password && (
                  <Form.Text className="text-danger">
                    Пароль має містити не менше 6 символів, 1 велику літеру, 1 цифру, символи латинського алфавіту.
                  </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox"  id="showPass"  label="Видимий пароль" onChange={() => setShowPassword(!showPassword)} />
            </Form.Group>
            <Button type="submit" id="submit">
            Зареєструвати
            </Button>
                </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
