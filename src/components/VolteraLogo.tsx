
import logo from "../assets/images/logo.png"
export function VolteraLogo({ }: { className?: string }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <img src={logo} alt="logo" className="h-[35px] w-[150px]" />
    </div>
  );
}
