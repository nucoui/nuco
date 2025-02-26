import { Button, H3, NavAccordion } from '@nuco/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
    <NavAccordion>
      <Button>Button</Button>
    </NavAccordion>
    <div className="p-2">
      <H3>Welcome Home!!!</H3>
      <h3>Welcome Home!!!</h3>
      <Button>Button</Button>
    </div>
    </>
  )
}
