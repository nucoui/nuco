import { H3 } from "@nuco/react/components/H3";
import { Button } from "@nuco/react/components/Button";
import { NavAccordion } from "@nuco/react/components/NavAccordion";
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
