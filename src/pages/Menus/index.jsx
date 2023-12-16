import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMenus } from "../../redux/features/menu/menuSlice"
import { registerUser } from "../../redux/features/register/registerSlice"
import { Form, Button, Alert } from "react-bootstrap"

const initialPayload = {
    name: "",
    username: "",
    password: "",
    roleId: 1
}



function Menus() {
    const [registerPayload, setRegisterPayload] = useState(initialPayload)
    const {list} = useSelector((state) => state.menus)
    const {success, loading, error } = useSelector((state) => state.register)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenus())
    }, [])

    function handleFormRegister(e){
        let {name, value} = e.target
        setRegisterPayload({...registerPayload, [name]: value})
    }

    function handleRegister(){
        dispatch(registerUser(registerPayload))
    }


    return (
        <>
            <div>

                <h1>Menus</h1>
                {
                    list.map(menu => {
                        return (
                            <div key={menu.id}>
                                <p>{menu.id} - {menu.name}</p>
                            </div>
                        )
                    })
                }

            </div>

            <div>
                <Form className="d-grid gap-3">
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Nama Lengkap" onChange={handleFormRegister} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username*</Form.Label>
                        <Form.Control type="username" name="username" placeholder="Username" onChange={handleFormRegister} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Create Password*</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleFormRegister} />
                    </Form.Group>
                </Form>

                <div className="d-grid">
                    <Button className="button-submit-register" type="submit" onClick={handleRegister} disabled={loading}>
                        Submit
                    </Button>
                </div>

            </div>

            <div>
                {
                    error != "" ? (
                        <Alert variant={'danger'}>
                            {error}
                        </Alert>
                    ) : null
                }
            </div>
        </>
    )
}

export default Menus