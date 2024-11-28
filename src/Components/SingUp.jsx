import { useForm } from 'react-hook-form';

export default function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col items-center gap-8 pt-8">
      <div className="hidden lg:block"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8"
      >
        <h3>Book Appointment</h3>
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} />

        <input type="submit" />
      </form>
    </section>
  );
}
