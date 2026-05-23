import { useCallback, useEffect, useState } from "react";

const NAV_OFFSET = 120;

function getSectionFromHash(sectionIds) {
  const hash = window.location.hash.replace("#", "");
  return sectionIds.includes(hash) ? hash : null;
}

function getSectionFromScroll(sectionIds) {
  const scrollPosition = window.scrollY + NAV_OFFSET;
  let current = sectionIds[0];

  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && section.offsetTop <= scrollPosition) {
      current = sectionId;
    }
  });

  return current;
}

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(
    () => getSectionFromHash(sectionIds) ?? sectionIds[0] ?? "home",
  );

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(getSectionFromScroll(sectionIds));
    };

    const handleHashChange = () => {
      const hashSection = getSectionFromHash(sectionIds);
      if (hashSection) {
        setActiveSection(hashSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  const navigateToSection = useCallback(
    (sectionId) => {
      if (sectionIds.includes(sectionId)) {
        setActiveSection(sectionId);
      }
    },
    [sectionIds],
  );

  return [activeSection, navigateToSection];
}

export default useActiveSection;
