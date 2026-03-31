import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    insuranceType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Int.compare(form2.timestamp, form1.timestamp);
    };
  };

  type AdvisorApplication = {
    name : Text;
    email : Text;
    phone : Text;
    location : Text;
    experience : Text;
    timestamp : Time.Time;
  };

  module AdvisorApplication {
    public func compare(app1 : AdvisorApplication, app2 : AdvisorApplication) : Order.Order {
      Int.compare(app2.timestamp, app1.timestamp);
    };
  };

  let contactForms = Map.empty<Time.Time, ContactForm>();
  let advisorApplications = Map.empty<Time.Time, AdvisorApplication>();

  public shared ({ caller }) func submitContactForm(form : ContactForm) : async () {
    let timestamp = Time.now();
    let newForm = {
      form with
      timestamp;
    };
    contactForms.add(timestamp, newForm);
  };

  public shared ({ caller }) func submitAdvisorApplication(app : AdvisorApplication) : async () {
    let timestamp = Time.now();
    let newApp = {
      app with
      timestamp;
    };
    advisorApplications.add(timestamp, newApp);
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray().sort();
  };

  public query ({ caller }) func getAllAdvisorApplications() : async [AdvisorApplication] {
    advisorApplications.values().toArray().sort();
  };
};
