<div>
<!-- Banner -->
<section id="banner">
  <div class="content">
    <header>
      <h1>Oracle database catalog</h1>
      <p>Catalog your Oracle databases in a single location</p>
    </header>
    <p>Visulate for Oracle is a Cloud-based application to browse and search Oracle databases.
    Users create connections from a central server to each database and then query them
    using REST APIs or a browser.</p>
    <ul class="actions">
      <li><a href="https://demo.visulate.net" class="button big" target="_blank">Live Demo</a></li>
      <li><a href="https://console.cloud.google.com/marketplace/details/visulate-llc-public/visulate-for-oracle" class="button big">Learn More</a></li>      
    </ul>
  </div>
  <span class="image">
    <img src="images/visulate-for-oracle.png" alt="Visulate for Oracle" style="height: auto"/>
  </span>
</section>

<!-- Section -->
  <section>
    <header class="major">
      <h2>Features</h2>
    </header>
    <div class="features">
      <article>
        <span class="icon solid fa-database"></span>
        <div class="content">
          <h3>One tool</h3>
          <p>Single tool to catalog the company’s Oracle databases. No server agents to install and manage.
           No client code to download or host via Citrix. Does not require Oracle server modifications
           e.g. UTL_FILE directories or REST Data Services (ORDS)</p>
        </div>
      </article>
      <article>
        <span class="icon solid fa-cloud"></span>
        <div class="content">
          <h3>Cloud-based</h3>
          <p>Enterprise-ready containerized solution with prebuilt deployment templates.
          Available as a Kubernetes application on Google Cloud Marketplace.
         </p>
        </div>
      </article>
      <article>
        <span class="icon solid fa-sitemap"></span>
        <div class="content">
          <h3>Database Object Reporting</h3>
         <p>Search and browse the data dictionary in each database.  Create bookmarks and links to schemas and objects.</p>
         <p>Query the database's dependency model to identify dependencies to and from the object (e.g a view "uses" the tables it is based on and is "used by" a procedure that selects from it).</p>
        </div>
      </article>
      <article>
        <span class="icon solid fa-file"></span>
        <div class="content">
          <h3>SQL, PL/SQL, DDL and CSV</h3>
          <p>Examine PL/SQL packages and procedures. Extract SQL statements from them. Identify dependencies on other database objects.</p>
          <p> Generate and download DDL for individual objects or groups of objects. </p>
          <p>Run SQL statements to review table contents and generate CSV files for data migrations</p>
        </div>
      </article>
      <article>
        <span class="icon solid fa-search"></span>
        <div class="content">
          <h3>Advanced Search and Filter</h3>
          <p>Single query to find objects by name in every schema and database. Filtered search to find objects in a database that match a wildcard pattern (e.g. E-Business Suite product prefix). </p><p>Advanced search API to identify objects and their dependent objects (e.g. a find the schema definition for a stored procedure and every object it needs to install cleanly)</p>
        </div>
      </article>
      <article>
        <span class="icon solid fa-wrench"></span>
        <div class="content">
          <h3>API Support</h3>
          <p>REST APIs are available for all application features.</p>
        </div>
      </article>
    </div>
  </section>
</div>
<div>
  <header class="major">
    <h2>Common use cases</h2>
  </header>
</div>

### On-Premises to Cloud migration
Document and analyze on-premises environments prior to migration. Evaluate proprietary feature usage in each database. Identify "lift and shift" projects and candidates for conversion to microservices or other database engines. Download the DDL for refactoring. Find direct and indirect dependencies for objects in microservice candidates. Generate CSV files to seed the new instance.

### Re-write PL/SQL for the cloud
Examine custom PL/SQL and other database related program logic in stored procedures, packages and triggers. Extract SQL statements and business logic. Rewrite in other languages.

### Decommission zombie database instances
Review the contents of old databases. What are they running? Are they still needed or were they left running because no one turned them off. Identify targets for consolidation or decommissioning.

### Custom development
Document custom code in your Commercial-off-the-shelf (COTS) application database. Review the schema definitions in your E-Business Suite database. Examine dependencies before a schema change. Download and diff the DDL for objects in development and test environments.

### License management
Catalog all of your company's Oracle database instances in preparation for a compliance audit. Identify Enterprise Edition feature and option usage. Find Enterprise Edition license instances that could be be downgraded to Standard Edition 2. Catalog and analyze Oracle database instances on GCP Bare Metal, Oracle Cloud Platform or other Cloud providers.
