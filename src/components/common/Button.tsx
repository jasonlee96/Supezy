function Button({alignCss, customCss, text, href}:
    {
    alignCss?:string
    customCss: string,
    text:string,
    href?: string
    }
) {
    return (
      <div className={"bg-trans py-4 d-flex " + alignCss }>
          <a className={"border-trans px-5 py-3 btn-rounded btn btn-lg btn-primary " + customCss} href={href ?? "#"}>{text}</a>
        </div>
    );
  }
  
  export default Button;