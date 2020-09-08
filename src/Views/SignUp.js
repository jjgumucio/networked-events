import React, { useState } from 'react';
import { Link } from "react-router-dom"
import 'antd/dist/antd.css';
import '../Css/SignIn.css';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { createUserWithEmailAndPassword } from "../Providers/Firebase"



    const { Option } = Select;
    

    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
          md: {
            span: 16
          },
          lg: {
            span: 16
          }
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
    
      const [ state, setState ] = useState(
        {
          firstName:"",
          lastName: "",
          email: "",
          password: "",
          repeat_password: ""
        }
      )



      const RegistrationForm = () => {
        const [form] = Form.useForm();
      
        const onFinish = values => {
          console.log('Received values of form: ', values);
          validateFields = async (values) =>  {
            if (!error) {
              if (password !== confirm) {
                alert("Las contraseñas no coinciden")
                return
              }

              try {
                const authorizedUser = await createUserWithEmailAndPassword(email, password)
                const userRef = await firebase.user(authorizedUser.user.uid)

                await userRef.set({
                  email,
                  empresa,
                  prefix,
                  phone,
                  agreement
                })
              } catch (error) {
                setState({error})
                alert(error)
              }

            }
          }
        };
      
        const prefixSelector = (
          <Form.Item name="prefix" noStyle>
            <Select
              style={{
                width: 100,
              }}
            >
              <Option value="569">+569</Option>
              <Option value="072">072</Option>
            </Select>
          </Form.Item>
        );
        const [autoCompleteResult, setAutoCompleteResult] = useState([]);
      
        const onWebsiteChange = value => {
          if (!value) {
            setAutoCompleteResult([]);
          } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
          }
        };
      
        const websiteOptions = autoCompleteResult.map(website => ({
          label: website,
          value: website,
        }));
        return (
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '+569',
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'Por favor, ingresa un email valido.',
                },
                {
                  required: true,
                  message: 'Por favor, ingresa tu email',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              name="password"
              label="Contraseña"
              rules={[
                {
                  required: true,
                  message: 'Por favor, ingresa tu contraseña.!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              name="confirm"
              label="Confirma tu contraseña"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresa tu contraseña',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
      
                    return Promise.reject('Las contraseñas ingresadas no coinciden.');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              name="phone"
              label="Numero de telefono"
              rules={[
                {
                  required: true,
                  message: 'Por favor, ingresa tu número de telefono',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
      
            <Form.Item
              name="empresa"
              label="Empresa"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresa el nombre de la empresa que representas',
                },
              ]}
            >
              <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="empresas">
                <Input />
              </AutoComplete>
            </Form.Item>
      
            <Form.Item label="Captcha" extra="Debemos confirmar que eres humano :).">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: 'Por favor, ingresa el Captcha',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>Obtener Captcha</Button>
                </Col>
              </Row>
            </Form.Item>
      
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                He leído los <Link to="/">terminos y condiciones</Link> de uso.
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Registrarme
              </Button>
              <p className="loginRedirect">¿Ya tienes una cuenta? Ingresa <Link to="/login">aquí</Link></p>
            </Form.Item>
            
          </Form>
        );
      };


export default RegistrationForm
