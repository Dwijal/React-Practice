import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../Store/store"
import { BrowserRouter, Link } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should load the head component",()=>{

    render(<BrowserRouter>
    <Provider store={store}>
    <Link>    
    <Header/>
    </Link>
    </Provider>
    </BrowserRouter>)

    const header=screen.getByRole("button",{name:"Login"})

    expect(header).toBeInTheDocument()
})

it("Should turn Logout when login buttion is clicked",()=>{

    render(<BrowserRouter>
        <Provider store={store}>
        <Link>    
        <Header/>
        </Link>
        </Provider>
        </BrowserRouter>)

    const loginBtn= screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginBtn)

    const logoutBtn= screen.getByRole("button",{name:"Logout"})

    expect(logoutBtn).toBeInTheDocument()
    
})