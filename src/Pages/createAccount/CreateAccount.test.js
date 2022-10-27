import React from "react";
import {fireEvent, getAllByLabelText, screen, render} from "@testing-library/react";
import AccountForm  from "../../components/AccountForm";
import CreateAccount from "./CreateAccount"

test("create account component is present in the document",()=>{
    const {getByLabelText} = render(<AccountForm />);
    const formNameElement =  getByLabelText("Name");
    const formEmailElement =  getByLabelText("E-mail");
    expect(formNameElement).toBeInTheDocument();
    expect(formNameElement).toBeInTheDocument();
})

test("render one button in single account form", async()=>{
    const {findAllByRole} = render(<AccountForm />);
    const formbutton =  await findAllByRole("button");
   
    expect(formbutton).toHaveLength(1);
})