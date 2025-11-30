const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus("submitting");

  const form = e.currentTarget;
  const formData = new FormData(form);

  // ONLY add these here – remove hidden inputs
  formData.append("_subject", "New Inquiry from Lone Dog Website!");
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  formData.append("_origin", "https://lonedogstudios.com");

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/b32b482cf51c80d44cb4f2766605d6e7",
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }
    );

    if (!response.ok) throw new Error("Network error");

    const result = await response.json();
    console.log("FormSubmit OK:", result);

    setFormStatus("success");
    form.reset();

  } catch (error) {
    console.error("Form error:", error);
    setFormStatus("error");
  }
};
