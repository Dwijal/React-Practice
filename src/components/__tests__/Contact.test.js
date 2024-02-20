import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react"
import Contact from "../Contact"


it("Should load the Contact component and check heading",()=>{

    render(<Contact/>)

    const getHeading= screen.getByRole("heading")

    expect(getHeading).toBeInTheDocument()


})

