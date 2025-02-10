document.addEventListener("DOMContentLoaded", function() {
    // Function to update the content of the preview iframe.
    function updatePreview() {
      const htmlContent = document.getElementById('html-editor').value;
      const cssContent = document.getElementById('css-editor').value;
      const jsContent = document.getElementById('js-editor').value;
      const previewFrame = document.getElementById('preview-frame');
      const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;

      // Build the complete document string.
      // Note: The <\/script> escape is used to prevent premature script termination.
      const fullDocument = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <style>
            ${cssContent}
          </style>
        </head>
        <body>
          ${htmlContent}
          <script>
            ${jsContent}
          <\/script>
        </body>
        </html>
      `;

      // Write the content to the iframe.
      previewDocument.open();
      previewDocument.write(fullDocument);
      previewDocument.close();
    }

    // Update preview on button click.
    document.getElementById('update-btn').addEventListener('click', updatePreview);

    // Optionally: update preview as you type.
    document.getElementById('html-editor').addEventListener('input', updatePreview);
    document.getElementById('css-editor').addEventListener('input', updatePreview);
    document.getElementById('js-editor').addEventListener('input', updatePreview);

    // Initialize the preview on page load.
    updatePreview();
  });
