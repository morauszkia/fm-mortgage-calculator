import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/tailwindcss";
import "./style.css";
import App from "./App.vue";

const inputText = "text-lg leading-[1.25] font-bold";
const inputSpacing = "py-3 px-4";
const inputBorderNormal =
  "border border-[var(--slate-500)] rounded-sm overflow-hidden";
const inputBorderHover = "hover:not-focus-within:border-[var(--slate-900)]";
const inputBorderFocus = "focus-within:border-[var(--lime)]";
const inputBorderInvalid = "group-data-[invalid]:border-[var(--red)]";
const affixNormal = `cursor-pointer bg-[var(--slate-100)] ${inputSpacing} ${inputText}`;
const affixFocus =
  "peer-focus:bg-[var(--lime)] peer-focus:text-[var(--slate-900)]";
const affixInvalid =
  "group-data-[invalid]:bg-[var(--red)] group-data-[invalid]:text-[var(--white)]";
const markerNormal =
  "w-[1.2rem] aspect-square border border-[var(--slate-700)] rounded-full cursor-pointer checked:border-[var(--lime)] grid place-items-center before:content-[''] before:w-[0.6rem] before:aspect-square before:bg-[var(--lime)] before:rounded-full before:invisible ";
const markerFocus = "focus:outline-none focus:border-[var(--lime)]";
const markerChecked = "checked:before:visible";

createApp(App)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses({
          global: {
            outer: "flex flex-col gap-3 group",
            label: "block mb-3",
            inner: `w-full flex ${inputBorderNormal} ${inputBorderHover} ${inputBorderFocus} ${inputBorderInvalid}`,
            input: `w-full peer ${inputSpacing} ${inputText} focus:outline-none`,
            prefix: `order-first ${affixNormal} ${affixFocus} ${affixInvalid}`,
            suffix: `${affixNormal} ${affixFocus} ${affixInvalid}`,
            message: "text-(length:--font-size-sm) text-(color:--red)",
          },
          button: {
            input:
              "$reset w-fit cursor-pointer underline hover:text-[var(--slate-900)]",
          },
          radio: {
            inner: "$reset",
            options: "flex flex-col gap-2",
            legend: "$reset mb-3",
            wrapper: `cursor-pointer flex gap-4 items-center ${inputSpacing} ${inputBorderNormal} leading-none hover:border-[var(--lime)] focus-within:border-[var(--lime)] focus-within:bg-[var(--lime-15)] has-[:checked]:border-[var(--lime)] has-[:checked]:bg-[var(--lime-15)]`,
            label: `$reset inline-block ${inputText}`,
            input: `$reset appearance-none ${markerNormal} ${markerFocus} ${markerChecked} focus:outline-none`,
          },
          submit: {
            input:
              "flex justify-center items-center gap-3 cursor-pointer bg-[var(--lime)] text-[var(--slate-900)] rounded-full hover:bg-[var(--lime-50)] focus:bg-[var(--lime-50)] sm:w-auto px-10 py-4",
          },
        }),
      },
    })
  )
  .mount("#app");
