
import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test('Episode renders', ()=>{
    render(<Episodes episodes={[]} />)
})