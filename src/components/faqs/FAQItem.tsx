import { FAQGroup, FAQ } from "../../context/Context";

function FAQItem ({item, groupKey}:{
    item: FAQ,
    groupKey: Number
}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={"faqItemHeader-"+groupKey+"-"+item.id}>
            <button className="accordion-button collapsed fs-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target={"#faqItemCollapse-"+groupKey+"-"+item.id} aria-expanded="false" aria-controls={"#faqItemCollapse-"+groupKey+"-"+item.id}>
                {item.question}
            </button>
            </h2>
            <div id={"faqItemCollapse-"+groupKey+"-"+item.id} className="accordion-collapse collapse faq-lines" aria-labelledby={"#faqItemHeader-"+groupKey+"-"+item.id} data-bs-parent={"#faqGroup-"+groupKey}>
                <div className="accordion-body">
                    {item.answer}
                </div>
            </div>
        </div>
      );
  }

export default FAQItem;