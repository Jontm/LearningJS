import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputBooking() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Antall netter" />
        <InputGroupAddon align="inline-end">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Navn" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
            <InputGroup>
        <InputGroupAddon>
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Adresse" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Land" />
        <InputGroupAddon align="inline-end">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
            <InputGroup>
        <InputGroupAddon>
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Mail" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
                  <InputGroup>
        <InputGroupAddon>
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Phone number" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Melding/ønsker" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
