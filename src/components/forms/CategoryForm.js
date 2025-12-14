import React from 'react';

// COMPONENTES DO ANT DESIGN
import { 
    DeleteOutlined,
    EditOutlined,
    MailOutlined,
    GoogleOutlined,
    UserOutlined, 
    SafetyOutlined 
} from '@ant-design/icons';

// COMPONENTES DO ANTD PARA SEREM USADOS COMO BOOTSTRAP
import { 
    Button,
    Checkbox,
    Form,
    Input 
} from 'antd';

const CategoryForm = ({ handleSubmit, name, setName }) => (
    <Form onSubmit={handleSubmit} layout="vertical">
        {/* Título do Formulário */}
        <Form.Item>
            <label 
                className="text-dark form-control mb-3 text-center" 
                style={{ background: "rgba(0, 0, 0, 0.1)" }}
            >
                <b>C a t e g o r i a s</b>
            </label>
        </Form.Item>

        {/* Campo de Input para Nova Categoria */}
        <Form.Item>
            <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                prefix={<SafetyOutlined />}
                className="text-primary border-dark form-control mb-3"
                size="large"
                placeholder="Nova Categoria"
                required
                // autoFocus
            />
        </Form.Item>

        {/* Botão de Salvar */}
        <Form.Item>
            <div className="form-group col-md-5 mx-auto">
                <Button
                    style={{ background: "black" }}
                    onClick={handleSubmit}
                    size="small"
                    shape="round"
                    className="text-white btn btn-primary mx-auto form-group mb-4"
                    type="button"
                    // disabled={!name || name.length < 0 || loading}
                >
                    S a l v a r
                </Button>
            </div>
        </Form.Item>
    </Form>
);

export default CategoryForm;