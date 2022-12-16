const FirstForm = () => {
  return (
    <form id="first-form">
      <fieldset>
        <legend>Page 1 out of x</legend>
      <label>What is your name?
        <input type="text"/>
      </label>
      <label>How did you find this form?
        <select>
          <option>Please select an option below:</option>
          <option>I randomly found this form.</option>
          <option>Somebody shared this form with me.</option>
          <option>The creator of this form shared it with me.</option>
        </select>
      </label>
      <label>What is your favorite color?
        <input type="color" />
      </label>
      <p>You'll be able to change this color at anytime after this form!</p>
      <button>Next Page</button>
      </fieldset>
    </form>
  )
}

export default FirstForm;