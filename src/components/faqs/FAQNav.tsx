import { FAQGroup, FAQ } from "../../context/Context";

function FAQGroups ({groups}:{
    groups: Array<FAQGroup> | undefined
}) {
    return (
        <ul className="nav nav-tabs">
            {
                groups?.map((item) =>   
                <li className="nav-item" key={item.id.toString()}>
                    <a className={"nav-link p-3 " + (item.is_default ? "active" : "")} id={"faqNav-" + item.id} data-bs-toggle="tab" data-bs-target={"#faqNavControl-" + item.id} type="button" role="tab" aria-controls={item.group_title} aria-selected="true">
                        {item.group_title}
                    </a>
                </li>
                )
            }
        </ul>
      );
  }

export default FAQGroups;