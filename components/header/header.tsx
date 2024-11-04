import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations();

  return (
    <header className="full-w flex h-[56px] flex-row items-center justify-between bg-zinc-700 px-3">
      <h1 className="text-2xl text-slate-50">ACS</h1>
      <menu className="hidden text-slate-50 md:flex [&>li:hover]:bg-zinc-500 [&>li]:flex [&>li]:h-[56px] [&>li]:items-center [&>li]:px-4">
        <li>
          <a href="/">{t("home")}</a>
        </li>
        <li>
          <a href="/events">{t("events")}</a>
        </li>
        <li>
          <a href="/teams">{t("teams")}</a>
        </li>
        <li>
          <a href="/ranking">{t("ranking")}</a>
        </li>
      </menu>
    </header>
  );
};

export { Header };
