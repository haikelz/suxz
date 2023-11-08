export default function Modal() {
  return (
    <div class="fixed inset-0">
      <div>
        <p></p>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Learnings</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Testimonial</p>
          </li>
        </ul>
        <div>
          <button type="button" aria-label="login">
            Log in
          </button>
          <button type="button" aria-label="sign up">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
