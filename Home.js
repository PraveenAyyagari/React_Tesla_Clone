import React from 'react'
import styled from "styled-components"
import Section from "./Section"



function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description ="OOrder Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText = "Existing Inventory"
            />
           <Section 
           title="Model Y"
            description ="OOrder Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText = "Existing Inventory"
            />
            <Section 
            title="Model X"
            description ="OOrder Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText = "Existing Inventory"
            />
            <Section 
            title="Model 3"
            description ="OOrder Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText = "Existing Inventory"
            />
            <Section
                title="Lowest Cosr Solar Panel in America"
                description ="Money-back gurantee"
                backgroundImg = "solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
            title="Solar for New Roofs"
            description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg ="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText ="Learn More"
            />
            <Section 

            title = "Accessories"
            description =""
            backgroundImg ="accessories.jpg"
            leftBtnText="Shop Now"

            
            />


           
            </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`
