import { JSXElement } from "solid-js";
import { tw } from "../../lib/helpers";

type TemplateProps = {
  className?: string;
  children: JSXElement;
};

export default function Template({ className, children }: TemplateProps) {
  return (
    <section
      class={tw(
        "w-full max-w-full flex items-center justify-center",
        className
      )}
    >
      <div class="max-w-7xl px-4 w-full">{children}</div>
    </section>
  );
}
