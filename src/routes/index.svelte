<script>
  import "carbon-components-svelte/css/white.css";
  import {
    DatePicker,
    DatePickerInput,
    Form,
    FormGroup,
    Link,
    NumberInput,
    TextInput,
  } from "carbon-components-svelte";
  import { identity } from "svelte/internal";
  let submitStatus;
  const submitForm = async (data) => {
    submitStatus = "submitting";
    const formData = new FormData(data.currentTarget);

    const res = await fetch("contact.json", {
      method: "POST",
      body: formData,
    });

    const { message } = await res.json();
    submitStatus = message;
  };
</script>

{#if submitStatus == "submitting"}
  <p>Submitting...</p>
{:else if submitStatus == "failed"}
  <p>Form submission failed</p>
{:else if submitStatus == "success"}
  <p>Form submission successful</p>
{:else}
  <Link
    size="lg"
    href="https://docs.google.com/forms/d/e/1FAIpQLSfyQJeW6k5tAT-d_Cnc3Uz1X-foRrASYxD1eqLemOK96FhZzg/viewform/"
  >
    Go to actual form
  </Link>

  <Form
    on:submit={(e) => {
      e.preventDefault();
      submitForm(e);
    }}
  >
    <FormGroup legendText="Client name" legendId="0">
      <TextInput labelText="Client name" placeholder="John Doe" name="name" />
    </FormGroup>

    <FormGroup legendText="Session date" legendId="1">
      <DatePicker datePickerType="single" dateFormat="yyyy-mm-dd" on:change>
        <DatePickerInput
          labelText="Session date"
          placeholder="yyyy-mm-dd"
          name="date"
        />
      </DatePicker>
    </FormGroup>
    <FormGroup legendText="Invoice number" legendId="2">
      <NumberInput label="Invoice number" value={1} name="invoice" />
    </FormGroup>
  </Form>

  <form on:submit|preventDefault={submitForm}>
    <div>
      <label for="">
        Name
        <input type="text" name="name" />
      </label>
    </div>
    <div>
      <label for="">
        Date
        <input type="date" name="date" />
      </label>
    </div>
    <div>
      <label for="">
        Invoice number
        <input type="number" name="imvoice" />
      </label>
    </div>
    <div>
      <label for="">
        Start time
        <input type="time" name="start" />
      </label>
    </div>
    <div>
      <label for="">
        End time
        <input type="time" name="end" />
      </label>
    </div>
    <div>
      <label for="">
        Hourly rate
        <input type="number" name="rate" />
      </label>
    </div>
    <div>
      <label for="">
        Client email
        <input type="email" name="email" />
      </label>
    </div>
    <div>
      <input type="submit" />
    </div>
  </form>
{/if}

<style>
  div {
    margin-bottom: 0.5em;
  }
</style>
