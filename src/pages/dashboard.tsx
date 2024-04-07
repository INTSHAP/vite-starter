export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <div className="rounded-md bg-primary text-white p-5">
        <h1>Hi user,</h1>
      </div>
      <div>
        {/* <form action={logout}>
          <Button
            type="submit"
            text="Log Out"
            disabled={status === "loading"}
          />
        </form> */}
      </div>
    </div>
  );
}
