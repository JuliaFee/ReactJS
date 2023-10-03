"use client"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import React, { useState } from "react";
import Exibir from "../data/exibir"




export default function Home() {
return(
    <>
    <Header></Header>
    <Exibir></Exibir>
    <Footer></Footer>
    </>
)
}