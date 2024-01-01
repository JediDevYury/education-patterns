export const PDFVisitor = {
  config: {},
  visitStorage(storage) {
    this.config.storageLimit = storage.limit;
  },
  visitFabric(fabric) {
    this.config.fabricPerformance = fabric.performance;
  },

  getPdfConfig() {
    return this.config;
  },
};

const storageNode = {
  type: "storage",
  limit: 56,
};

const fabricNode = {
  type: "fabric",
  performance: 78,
};

PDFVisitor.visitFabric(fabricNode);
PDFVisitor.visitStorage(storageNode);
