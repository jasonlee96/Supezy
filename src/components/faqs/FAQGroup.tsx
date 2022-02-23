import { groupEnd } from "console";
import { FAQGroup, FAQ } from "../../context/Context";
import FAQItem from "./FAQItem";

function FAQGroups ({group}:{
    group: FAQGroup,
}) {
    return (
        <div id={"faqNavControl-" + group.id} className={"card tab-pane fade show " + (group.is_default ? "active" : "")}  role="tabpanel" aria-labelledby={"#faqNav-" + group.id}>
            <div className="accordion accordion-flush" id={"faqGroup-" + group.id}>
                {
                    group.group_items.map((item) => <FAQItem item={item} groupKey={group.id} key={item.id.toString()}/>)
                }
            </div>
        </div>
      );
  }

export default FAQGroups;