import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations();

  return (
    <header className="full-w flex flex-row bg-zinc-700 px-3 h-[56px] justify-between items-center">
      <h1 className="text-slate-50 text-2xl ">ACS</h1>
      <menu className="flex [&>li]:h-[56px]  text-slate-50 [&>li]:px-4  [&>li:hover]:bg-zinc-500  [&>li]:flex [&>li]:items-center ">
        <li>
          <a href="/">{t("menu.home")}</a>
        </li>
        <li>
          <a href="races">{t("menu.races")}</a>
        </li>
        <li>
          <a href="teams">{t("menu.teams")}</a>
        </li>
        <li>
          <a href="ranking">{t("menu.ranking")}</a>
        </li>
      </menu>
    </header>
  );
};

export { Header };
